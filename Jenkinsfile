pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/jenkins-react-app-1"
                sh "sudo cp -r ${/var/lib/jenkins/workspace/neo-ci-cd-app-1}/build/ /var/www/jenkins-react-app-1/"
            }
        }
    }
}
