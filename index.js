const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require("./lib/shapes");
const SVG = require("./lib/svg");

// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
        type: 'input',
        message: 'Enter up to 3 characters for your logo: ',
        name: 'title',
        validate: (title) => {
            if(title.length > 3) {
                return 'Enter no more than 3 characters'
            }
            return true;
        }
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
  .then(data => {
    let shape;
    if(data.logoShape === "circle") shape = new Circle();
    else if (data.logoShape === "triangle") shape = new Triangle();
    else shape = new Square();
    shape.setColor(data.shapeColor);
    const svg = new SVG();
    svg.setText(data.title, data.textColor);
    svg.setShape(shape);

    fs.writeFile("examples/logo.svg", svg.render(), (err) => {
        if (err) console.log(err);
        else console.log("Generated logo.svg");
    })

  }
  )
