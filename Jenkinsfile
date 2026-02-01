
pipeline{
    agent any

    tools {
        nodejs 'node'
    }

    environment {
        IMAGE = 'janithadissanayaka/learn:burger'
        AWS_REGION = 'ap-south-1'
        CLUSTER_NAME = 'app-cluster'
        DOCKER_EMAIL='janithadissnayakaa@gmail.com'
    }


    stages {

        stage('Install Dependencies') {
            steps { sh 'npm install' }
        }

        stage('Run Tests') {
            steps { sh 'npm test || true' }
        }

        stage('Build') {
            steps { sh 'npm run build' }
        }

        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: '.next/**', fingerprint: true
            }
        }

        /*stage('Docker Build & Push') {
            agent {
                docker {
                    image 'docker:cli'
                    args '-u root -v /var/run/docker.sock:/var/run/docker.sock'
                }
            }
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'docker-registry-creds',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )
                ]) {
                    sh '''
                      echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                      docker build -t $IMAGE .
                      docker push $IMAGE
                    '''
                }
            }
        }*/

       stage('Provision Server') {
    agent {
        docker {
            image 'amazon/aws-cli:2.15.0'
            args '-u root'
        }
    }
    steps {
        withCredentials([[
            $class: 'AmazonWebServicesCredentialsBinding',
            credentialsId: 'AWS_CRED'
        ]]) {
            dir('Terraform') {
                sh '''
                    yum install -y unzip curl || apt-get update && apt-get install -y unzip curl

                    # Install Terraform
                    curl -LO https://releases.hashicorp.com/terraform/1.6.6/terraform_1.6.6_linux_amd64.zip
                    unzip terraform_1.6.6_linux_amd64.zip
                    mv terraform /usr/local/bin/

                    # Install kubectl
                    curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
                    install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

                    terraform init
                    terraform apply -auto-approve

                    aws eks update-kubeconfig --region $AWS_REGION --name $CLUSTER_NAME --kubeconfig $WORKSPACE/kubeconfig
                    kubectl get nodes
                '''
            }
        }
    }
}


       stage('Deploy to EKS with Ansible') {
    agent {
        docker {
            image 'willhallonline/ansible:latest'
            args '-u root'
        }
    }
    steps {
        withCredentials([
            usernamePassword(
                credentialsId: 'docker-registry-creds',
                usernameVariable: 'DOCKER_USER',
                passwordVariable: 'DOCKER_PASS'
            )
        ]) {
            sh '''
                export KUBECONFIG=$WORKSPACE/kubeconfig

                export DOCKER_CONFIG_JSON=$(echo -n '{"auths":{"https://index.docker.io/v1/":{"username":"'$DOCKER_USER'","password":"'$DOCKER_PASS'","email":"'$DOCKER_EMAIL'","auth":"'$(echo -n $DOCKER_USER:$DOCKER_PASS | base64)'"} }}' | base64 -w 0)

                cd Ansible
                ansible-playbook deploy-to-eks-cluster.yaml
            '''
        }
    }
}




    }
}
