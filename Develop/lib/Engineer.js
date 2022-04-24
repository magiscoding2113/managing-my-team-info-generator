const inquirer = require('inquirer');

class Engineer {
    constructor() {
        this.Engineer = null;
    }
    getGitHubUser() {
        return inquirer.prompt([
            {
                type:'input',
                name:'GitHubUser',
                message:'What is your GitHub username?'

        }
    ]).then(answers => {
        this.GitHubUser = answers.GitHubUser;
        this.getRole();
    })
    }
    getRole(){
        this.role = 'Engineer'
        console.log(this)
    }
    getGitHubUser(){
        this.GitHubUser = 'GitHubUser'
        console.log(this)
    }
}




const e = new Engineer();
e.getGitHubUser();
module.exports = Engineer;