pipeline{
    agent any

    stages{
        stage('Cloning'){
            steps{
                sh 'git clone https://github.com/jahid28/jenkins_prac_2'
            }
        }
        // stage('Testing'){
        //     steps{
        //         sh 'npm test script.test.js'
        //     }
        // }
        // stage('Deploy'){
        //     steps{
        //         echo 'Deploying the project'
        //     }
        // }

        stage('Deleting') {
            steps {
                script {
                    // Assuming Jenkins runs on the same EC2 instance
                    sh 'sudo rm -rf .'
                }
            }
        }
        stage('Deploy to /var/www/html') {
            steps {
                script {
                    // Assuming Jenkins runs on the same EC2 instance
                    sh 'sudo cp -r jenkins_prac_2/* test/'
                }
            }
        }
    }

    post{
        always{
            echo 'This will always run'
        }
        success{
            echo 'This will run only if the build is successful'
        }
        failure{
            echo 'This will run only if the build fails'
        }
        unstable{
            echo 'This will run only if the build is unstable'
        }
        changed{
            echo 'This will run only if the build status changes'
        }
    }
}