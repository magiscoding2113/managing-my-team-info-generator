const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');

const generateHtml = require('./src/generatehtml');
const employeeList = []

const managerInput = () => {
    inquirer
    .prompt([
        {
        
            type: 'input',
            name: 'name',
            message:'what is your Managers name?',

    },
    {
        type:'input',
        name:'id',
        message: 'what is the managers id?',
    },
    {
        type:'input',
        name:'email',
        message:'what is the managers email?'
    },
    {
        type:'input',
        name:'office',
        message:'what is the managers office number?'
    },
])
.then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
    employeeList.push(manager)
    addEmployee();
});
}


