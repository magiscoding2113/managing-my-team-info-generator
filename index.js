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
const addEmployee = () => {
    inquirer
    .prompt([
        { 
            type:'list',
            name:'name',
            message: 'Please select a member role:',
            choices: ['Engineer', 'Intern', 'No more employees to add'],
        },
    ])
    .then(answers => {
        console.log(answers)
        if(answers.name === 'Engineer') {
            engineerInput();
        } else if(answers.name === "Intern") {
            internInput();
        }else {
            const html = generateHtml(employeeList);
            fs.writeFile('team.html', html, (err)=> 
            err ? console.log(err): console.log('Succesfully created team.html')
            );
        }
    });
}
const engineerInput = () => {
    inquirer
    .prompt([
        {
            type:'input',
            name:'name',
            message: ' what is your engineers name?',
        
        },
        {
            type:'input',
            name:'id',
            message:'what is the engineer iD?',
        },
        {
            type:'input',
            name: 'email',
            message:'what is the engineer email?',
        },
        {
            type:'input',
            name:'github',
            message:'what is the engineer github username?',
        },
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employeeList.push(engineer)
        addEmployee();
    });
}
const internInput = () => {
    inquirer
    .prompt([
        {
            type:'input',
            name:'name',
            message:'what is your intern name?',

        },
        {
            type:'input',
            name:'id',
            message:'what is the intern ID?',
        },
        {
            type:'input',
            name: 'email',
            message:'what is the intern email?',
        },
        {
            type:'input',
            name:'school',
            message:'waht is the school name?',
        },
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employeeList.push(intern)
        addEmployee();
    });
}

managerInput();
