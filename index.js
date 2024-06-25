const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
        type: 'input',
        message: 'Enter up to 3 characters for your logo: ',
        name: 'title',
    },
    
    {
      type: 'input',
      message: 'Enter text color (keyword or hexcode): ',
      name: 'textColor',
    },
    
    {
        type: 'list',
        message: 'Choose a shape for your logo: ',
        name: 'logoShape',
        choices: ["circle", "triangle", "square"],
    },

    {
        type: 'input',
        message: 'Enter a color for your logo shape (keyword or hexcode): ',
        name: 'shapeColor',
    },


  ])
//   .then(data => {
//     fs.writeFile("examples/logo.svg", shapes(data), (err) => {
//         if (err) console.log(err);
//         else console.log("Generated logo.svg");
//     })

//   }
//   )
