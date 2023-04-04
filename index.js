const Manager=require("./lib/Manager")
const Intern=require("./lib/Intern")
const Engineer=require("./lib/Engineer")
const inquirer=require("inquirer")
let teamArray=[]


function managerQuestions(){
    inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        name: "managerName",
        message: "What is the Manager's name?"
    },
    {
      type: "input",
      name: "employeeId",
      message: "What is the Manager's Employee ID?"
  },
  {
    type: "input",
    name: "email",
    message: "What is the Manager's e-mail address?"
},
{
  type: "input",
  name: "officeNumber",
  message: "What is the Manager's telephone number?"
}
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  
    const managerOne=new Manager(answers.managerName, answers.employeeId, answers.email, answers.officeNumber)
    teamArray.push(managerOne)
    console.log(teamArray)
    mainMenue()
  })
}

function mainMenue(){
  inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "list",
        name: "mainMenu",
        message: "What would you like to do next?",
        choices: ["Add an engineer", "add an intern", "Finish with the list."]
    },
   
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  if (answers.mainMenu == "add an intern") {
    internQuestions()
  }
  if (answers.mainMenu == "Add an engineer") {
    engineerQuestions()
  }
  })
}
function internQuestions(){
    inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        name: "internName",
        message: "What is the Intern's name?"
    },
    {
      type: "input",
      name: "employeeId",
      message: "What is the Intern's Employee ID?"
  },
  {
    type: "input",
    name: "email",
    message: "What is the Intern's e-mail address?"
},
{
  type: "input",
  name: "school",
  message: "What is the Intern's school?"
}
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  
    const internOne=new Intern(answers.internName, answers.employeeId, answers.email, answers.school)
    teamArray.push(internOne)
    console.log(teamArray)
    mainMenue()
  })
}
function engineerQuestions(){
  inquirer
.prompt([
  /* Pass your questions in here */
  {
      type: "input",
      name: "engineerName",
      message: "What is the Engineer's name?"
  },
  {
    type: "input",
    name: "employeeId",
    message: "What is the Engineer's Employee ID?"
},
{
  type: "input",
  name: "email",
  message: "What is the Engineer's e-mail address?"
},
{
type: "input",
name: "github",
message: "What is the GitHub username?"
}
])
.then((answers) => {
  // Use user feedback for... whatever!!

  const engineerOne=new Engineer (answers.engineerName, answers.employeeId, answers.email, answers.github)
  teamArray.push(engineerOne)
  console.log(teamArray)
  mainMenue()
})
}
managerQuestions()