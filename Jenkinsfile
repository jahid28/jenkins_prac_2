pipeline{
    agent any

    stages{

        stage('Cloning'){
            steps{
                git branch: 'main', url: 'https://github.com/jahid28/jenkins_prac_2'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm packages
                sh 'npm install -y'
            }
        }

        stage('Testing'){
            steps{
                sh 'npm test script.test.js'
            }
        }
        // stage('Deploy'){
        //     steps{
        //         echo 'Deploying the project'
        //     }
        // }
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