project: DevOps CI/CD Pipeline on AWS EKS

description:
  This project demonstrates an end-to-end DevOps pipeline that builds, containerizes, provisions infrastructure, and deploys an application to Kubernetes (EKS) on AWS.

tech stack:
  - Jenkins (CI/CD)
  - Docker
  - Kubernetes (EKS)
  - Terraform
  - Ansible
  - AWS
  - Next.js

pipeline flow:
  - Code pushed to GitHub
  - Jenkins builds and tests the app
  - Docker image is created and pushed to registry
  - Terraform provisions AWS infrastructure
  - Ansible deploys the application to EKS
  - Application is exposed using NGINX Ingress

project structure:
  - Ansible: Kubernetes deployment playbooks
  - Terraform: AWS infrastructure as code
  - Dockerfile: Application container image
  - Jenkinsfile: CI/CD pipeline definition
  - web-app.yaml: Kubernetes Deployment, Service, and Ingress

deploy infrastructure:
  steps:
    - cd Terraform
    - terraform init
    - terraform apply

deploy application:
  steps:
    - cd Ansible
    - ansible-playbook deploy-to-eks-cluster.yaml

security:
  No credentials or secrets are stored in this repository.Sensitive data is handled using environment variables and Jenkins credentials.

purpose:
  - Demonstrate CI/CD automation
  - Show Infrastructure as Code with Terraform
  - Use Docker for containerization
  - Deploy applications to Kubernetes on AWS

 file-by-file overview:
   root:
     - package.json: Node scripts and dependencies for the Next.js app [package.json](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/package.json)
     - package-lock.json: deterministic dependency lockfile [package-lock.json](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/package-lock.json)
     - tsconfig.json: TypeScript compiler options (Next.js paths, strict, bundler resolution) [tsconfig.json](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/tsconfig.json)
     - next.config.ts: Next.js configuration (remote image domains) [next.config.ts](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/next.config.ts)
     - postcss.config.mjs: TailwindCSS PostCSS plugin setup [postcss.config.mjs](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/postcss.config.mjs)
     - eslint.config.mjs: Flat ESLint config targeting Next + TS [eslint.config.mjs](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/eslint.config.mjs)
     - dockerfile: Multi-stage Docker build (builder + production runner) [dockerfile](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/dockerfile)
     - Jenkinsfile: CI/CD pipeline (build, test, Docker build/push, Terraform apply, Ansible deploy) [Jenkinsfile](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/Jenkinsfile)
     - .dockerignore: Excludes dev files from Docker build context [.dockerignore](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/.dockerignore)
     - .gitignore: Ignores Terraform state, kubeconfig, credentials, etc. [.gitignore](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/.gitignore)
     - README.md: this documentation [README.md](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/README.md)

   app (Next.js “app” router):
     - app/layout.tsx: Root layout with Header/Footer and metadata [layout.tsx](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/app/layout.tsx)
     - app/page.tsx: Home page composing Hero, Menu, App, Offers [page.tsx](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/app/page.tsx)
     - app/globals.css: Global styles + sections for offers/newsletter [globals.css](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/app/globals.css)

   components:
     - components/layout/Header.tsx: Top navigation/header [Header.tsx](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/components/layout/Header.tsx)
     - components/layout/Footer.tsx: Footer with contact and social links [Footer.tsx](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/components/layout/Footer.tsx)
     - components/Hero/page.tsx: Hero section, feature cards, promos [Hero/page.tsx](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/components/Hero/page.tsx)
     - components/Menu/page.tsx: Tabbed menu (foods/snacks/beverages) [Menu/page.tsx](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/components/Menu/page.tsx)
     - components/App/page.tsx: App promo + customer reviews [App/page.tsx](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/components/App/page.tsx)
     - components/Offers/page.tsx: Offers, news grid, newsletter [Offers/page.tsx](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/components/Offers/page.tsx)

   public (static assets served by Next.js):
     - public/Burger1.png, Burger2.png, Burger3.png, Burger4.png: hero/promo images
     - public/fresh.png, organic.png, juice.png, potato.png, Delicious.png: feature icons
     - public/img/*: product, snacks, beverages, and background images
     - public/offer/*: images used by the Offers/news section
     - public/image/*: app-store/play-store and delivery images
     - public/*.svg, favicon.ico: vector icons and favicon

   Terraform (AWS infrastructure as code):
     - Terraform/vpc.tf: VPC module (public/private subnets, NAT, tags for EKS) [vpc.tf](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/Terraform/vpc.tf)
     - Terraform/eks.tf: EKS cluster using terraform-aws-modules/eks; node group, addons, providers [eks.tf](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/Terraform/eks.tf)
     - Terraform/terraform.tfvars: Inputs (CIDR, subnets, region, cluster name) [terraform.tfvars](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/Terraform/terraform.tfvars)

   Ansible (deployment to EKS):
     - Ansible/ansible.cfg: Ansible defaults; uses local inventory and Python 3 [ansible.cfg](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/Ansible/ansible.cfg)
     - Ansible/hosts: Local inventory (runs tasks locally on Jenkins agent) [hosts](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/Ansible/hosts)
     - Ansible/deploy-to-eks-cluster.yaml: Playbook creating namespace, imagePullSecret, applying app manifests, installing NGINX Ingress [deploy-to-eks-cluster.yaml](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/Ansible/deploy-to-eks-cluster.yaml)
     - Ansible/web-app.yaml: Kubernetes Deployment/Service/Ingress manifest for the web app [web-app.yaml](file:///c:/Users/ASUS/Desktop/DevOps_Project-1/Ansible/web-app.yaml)

 how the pipeline pieces fit together:
   - local development: Run the Next.js app, iterate on UI and assets
   - build image: Jenkins builds with Docker multi-stage and pushes to a registry
   - provision infra: Jenkins runs Terraform to create/update the VPC + EKS
   - configure access: kubeconfig is written and used for subsequent steps
   - deploy app: Jenkins calls Ansible; Ansible applies the Kubernetes manifests
   - ingress: NGINX Ingress is installed and exposes the service

 notable defaults to adapt:
   - Jenkinsfile IMAGE, AWS_REGION, CLUSTER_NAME: set to real values before running
   - Ansible/web-app.yaml image: point to the pushed image tag for your app
   - Terraform/terraform.tfvars: adjust subnets, region, cluster_name for your account
   - next.config.ts: allow any remote image domains used by components

 local commands:
   - npm run dev: start Next.js dev server (Turbopack)
   - npm run build: create production build
   - npm start: run built app in production mode
