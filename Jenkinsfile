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