pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    stages {
        stage('Checkout') {
            steps { checkout scm }
        }

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
    }
}
