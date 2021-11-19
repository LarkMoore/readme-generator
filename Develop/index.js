// TODO: Include packages needed for this application
const fs = require( 'fs' );
const inquirer= require('inquirer');
const generateMarkdown =require('./utils/generateMarkdown');

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt ([
{
    type:"input",
    name:"github",
    message: "What is your Github username?",
},
{
    type:"input",
    name: "email",
    message:"What is your email?"
},
{
    type:"input",
    name:"title",
    message:"What is the title of your application?"
},
{
    type:"input",
    name:"description",
    message:"Please write a brief description of your application."
},
{
    type:"input",
    name: "installation",
    message:"How will you employ this application?",
},
{
    type:"input",
    name: "usage",
    message:"How does this application works?",
},
{
    type:"input",
    name: "contribute",
    message:"Who are the contributers to this project?",
},
{
    type:"input",
    name: "test",
    message:"How will you test this application?",
},
{
    type:"list",
    name:"license",
    message:"Which licences did you use in this application?",
    choices: ["MIT", "ISC", "APACHE 2.0", "Mozilla", "None"]
}, 
    ]).then(function(response){
    console.log(response)
    fs.writeFileSync("readmetest.md", generateMarkdown(response))
})
}

// Function call to initialize app
init();