pipeline {
    agent any

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {

                stage('Agent1_1') {
                    agent {
                        label "principal"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Test_sinamope_cypress_2.git'      
                        bat 'npx cypress cache clear'                 
                        bat 'npm install cypress --save-dev'                       
                        bat 'npx update'
                        bat 'npx cypress run   --spec cypress/integration/sinamope/sinamope.js  --record --key 7d09f81b-6d47-4f91-b7e0-9203d2e1f3a8 --parallel'
                    
                    }
                }


                // stage('Node1') {
                //     agent {
                //         label "Agent1_1"
                //     }
                //     steps {
                //         git url: 'https://github.com/rvndrupal/Test_sinamope_cypress_2.git'  
                //         bat 'npx cypress cache clear'                    
                //         bat 'npm install cypress --save-dev'                       
                //         bat 'npx update'
                //         bat 'npx cypress run   --spec cypress/integration/sinamope/sinamope.js  --record --key 7d09f81b-6d47-4f91-b7e0-9203d2e1f3a8 --parallel'
                    
                //     }
                // }

                // stage('Node2') {
                //     agent {
                //         label "Agent1_2"
                //     }
                //     steps {
                //         git url: 'https://github.com/rvndrupal/Test_sinamope_cypress_2.git'  
                //         bat 'npx cypress cache clear'                     
                //         bat 'npx cypress install --force'                       
                //         bat 'npx update'
                //         bat 'npx cypress run   --spec cypress/integration/sinamope/sinamope.js  --record --key 7d09f81b-6d47-4f91-b7e0-9203d2e1f3a8 --parallel'
                    
                //     }
                // }


                

                 
                  
            }

             
        }

    }
            
}