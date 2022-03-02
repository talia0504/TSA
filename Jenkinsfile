pipeline {

    agent any

    tools {nodejs "node"}

    stages {
        stage("build") {
            steps {
                echo 'Building the application...'
                sh "npm config ls"
                dir("client") {
                    echo 'install relevant packages on client...'
                    sh 'npm install'
                }
                dir("server") {
                    echo 'install relevant packages on server...'
                    sh 'npm install'
                }
            }
        }

        stage("test") {
            steps {
                echo 'testing the application...'
                dir("client") {
                    echo 'testing the app...'
                    sh 'npm run test'
                }
            }
        }

        stage("deploy") {
            steps {
                input 'Does the dev env looks ok?'
                echo 'deploying the application...'
            }
        }
    }
}