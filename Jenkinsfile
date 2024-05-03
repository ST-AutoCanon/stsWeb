pipeline {
    agent any
    
    environment {
        SONARQUBE_SERVER = 'http://103.104.231.205:9000/'
        EMAIL_TO = 'prajwalyavalker83320@gmail.com'
    }
    
    stages {
        stage('Checkout') {
            steps {
               git branch: 'main', git 'https://github.com/ST-AutoCanon/stsWeb.git'
            }
        }
        
        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv(SONARQUBE_SERVER) {
                    sh 'mvn clean package sonar:sonar'
                }
            }
        }
        
        stage('Check Code Quality') {
            steps {
                script {
                    def codeQuality = sh(script: './gradlew clean build sonarqube' , returnStatus: true)
                    
                    if (codeQuality != 0) {
                        echo "Code quality is not good. Sending code quality report via email."
                        emailext body: "SonarQube report attached.", subject: "Code Quality Report", to: EMAIL_TO, attachmentsPattern: '**/target/sonar/report-task.txt'
                        currentBuild.result = 'FAILURE'
                        error "Code quality is not good."
                    }
                }
            }
        }
        
        stage('Build and Deploy') {
            steps {
                script {
                    echo "Code quality is good. Building and deploying..."
                    // Add commands to build and deploy your application
                       sudo npm install 
                       sudo npm run build
                    sh 'mvn clean package'
                    sh 'scp -r target/* ubuntu@103.104.231.205: root /home/ubuntu/git/stsWeb'
                    sh 'ssh ubuntu@103.104.231.205 "sudo systemctl restart nginx"'
                }
            }
        }
    }
}
