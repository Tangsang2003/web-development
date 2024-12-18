# Web Development 🌐

This repository contains all the resources and mini projects I've completed while learning about web development.

## Table of Contents
- [Web Development 🌐](#web-development-)
  - [Table of Contents](#table-of-contents)
  - [1. HTML](#1-html)
    - [1.1 Introduction to HTML](#11-introduction-to-html)
    - [1.2 Intermediate HTML](#12-intermediate-html)
  - [2. CSS](#2-css)
    - [2.1 Introduction to CSS](#21-introduction-to-css)
    - [2.2 Intermediate CSS](#22-intermediate-css)
  - [2.3 Bootstrap](#23-bootstrap)
  - [3. JavaScript](#3-javascript)
    - [3.1 Introduction to JavaScript](#31-introduction-to-javascript)
    - [3.2 Intermediate JavaScript](#32-intermediate-javascript)
    - [3.3 The Document Object Model](#33-the-document-object-model)
    - [3.4 Boss Level Challenge](#34-boss-level-challenge)
    - [3.5 Advanced JavaScript and DOM manipulation](#35-advanced-javascript-and-dom-manipulation)
  - [4. jQuery](#4-jquery)
    - [4.1 The Simon Game](#41-the-simon-game)
  - [5. The UNIX Command Line](#5-the-unix-command-line)
  - [6. Node.js](#6-nodejs)
    - [6.1 Expressjs](#61-expressjs)
  - [7. Application Programming Interfaces (APIs)](#7-application-programming-interfaces-apis)
    - [7.1 A very very simple weather app using Node's native `https` package to integrate Open Weather API.](#71-a-very-very-simple-weather-app-using-nodes-native-https-package-to-integrate-open-weather-api)
    - [7.2 NewsLetter SignUp](#72-newsletter-signup)
  - [8. Git, GitHub and Version Control](#8-git-github-and-version-control)
  - [9. EJS (Embedded JavaScript Templating)](#9-ejs-embedded-javascript-templating)
    - [9.1 Running Code inside our EJS template](#91-running-code-inside-our-ejs-template)
    - [9.2 Module Exports and Passing functions](#92-module-exports-and-passing-functions)
    - [9.3 Project: To do List `Version 1`](#93-project-to-do-list-version-1)
  - [10. A blog website using all the concepts learned till now. Version 1.](#10-a-blog-website-using-all-the-concepts-learned-till-now-version-1)
    - [10.1 Express Routing Parameters](#101-express-routing-parameters)
  - [10. Databases](#10-databases)
    - [10.1 SQL](#101-sql)
    - [10.2 MongoDB](#102-mongodb)
      - [10.2.1 CRUD operations in MongoDB](#1021-crud-operations-in-mongodb)

## 1. HTML

### 1.1 Introduction to HTML

- [Introduction to HTML](./HTML/Introduction-to-HTML/01_Introduction_HTML/) `Basic HTML Boilerplate`
- [My Personal Site](./HTML/Introduction-to-HTML/02_My_Personal_Site/) `HTML Basics like img, anchor tags, lists, etc,.`

### 1.2 Intermediate HTML

- [Tables](./HTML/Intermediate-HTML/tables.html) `Tables basics, thead, tbody, tfoot, th, td, tr, etc.`
- [Nested Tables](./HTML/Intermediate-HTML/layout-with-tables.html) `Nesting tables and layout formatting with tables.`
- [Forms](./HTML/Intermediate-HTML/forms-input.html) `Different types of form inputs.`
- [Form actions](./HTML/Intermediate-HTML/proper-contact-me.html) `mailto, enctype, method, labels, name, etc.`

## 2. CSS

### 2.1 Introduction to CSS

- [Basic internal CSS](./CSS/Introduction-to-CSS/styling-hr/my-site.html) `Basic CSS syntax, Styling an <hr> element.`
- [Pseudoclasses](./CSS/Introduction-to-CSS/pseudoclasses/pseudoclasses.html) `Pseudoclasses in CSS. Example of ':hover'.`

### 2.2 Intermediate CSS

- [Project - Personal Site](./CSS/CSS-My%20Site/)
- [Positioning -I](./CSS/Intermediate-CSS/static-relative-positioning.html) `Static and Relative Positioning.`
- [Positioning -II](./CSS/Intermediate-CSS/absolute-positioning.html) `Absolute Positioning.`

## 2.3 Bootstrap

- [TinDog](./Bootstrap/TinDog/) `A RESPONSIVE Frontend project (Tinder for Dogs lol).`

## 3. JavaScript

### 3.1 Introduction to JavaScript

- [Hello World!](./JavaScript/Introduction%20to%20JavaScript/hello.js) `alert('Hello World');`
- [Data Types](./JavaScript/Introduction%20to%20JavaScript/data_types.js) `Numbers, Strings, Boolean.`
- [Variables](.//JavaScript/Introduction%20to%20JavaScript/variables_1.js) `What is your name? + introduction of keyword 'prompt'.`
- [Swap Numbers](./JavaScript/Introduction%20to%20JavaScript/swap_numbers_variables_exercise.js) `JavaScript Code to swap two numbers between variables without declaring a third variable.`
- [String Concatenation](./JavaScript/Introduction%20to%20JavaScript/greeting.js) `Greeting program.`
- [Twitter Character Count](./JavaScript/Introduction%20to%20JavaScript/characterCount.js) `Counting Characters with length function.`
- [Uppercase and Lowercase](./JavaScript/Introduction%20to%20JavaScript/uppercase_lowercase.js) `toUpperCase() and toLowerCase().`
- [Dog to Human Age Converter](./JavaScript/Introduction%20to%20JavaScript/dogAge_toHumanAge.js) `How old is your Dog?`
- [Karel Robot Chess Pattern](./JavaScript/Introduction%20to%20JavaScript/karel_robot.js) `Introduction to Custom Functions.`
- [Get x bottles of Milk.](./JavaScript/Introduction%20to%20JavaScript/buy_milk.js) `Functions with Parameters and Math.floor() for rounding down a number.`
- [BMI Calculator](./JavaScript/Introduction%20to%20JavaScript/bmi_calculator.js) `Practice for functions.`

### 3.2 Intermediate JavaScript

- [Random Number](./JavaScript/Intermediate%20JavaScript/random_number.js) `Math.random() and Math.floor()`.
- [If Statements](./JavaScript/Intermediate%20JavaScript/if_statements.js) `'===' is different than '=='. ` `'===' also checks if the datatype is same or not.`
- [Leap Year Challenge.](./JavaScript/Intermediate%20JavaScript/leap_year.js)
- [Arrays](./JavaScript/Intermediate%20JavaScript/guest_list.js) `array_name.includes(variable_name) to check if the variable exists in the array or not.`
- [FizzBuzz](./JavaScript/Intermediate%20JavaScript/fizzbuzz.js) `A fun game. Usage of conditionals and operators.`
- [FizzBuzz using While Loop.](./JavaScript/Intermediate%20JavaScript/while_fizzbuzz.js)
- [99 Bottles of Beer on the Wall.](./JavaScript/Intermediate%20JavaScript/99_bottles_of_beer.js)
- [FizzBuzz using For loop.](./JavaScript/Intermediate%20JavaScript/for_fizzbuzz.js) `Use while loop to check for state, and for loop to iterate.`
- [Fibonacci Sequence Generator.](./JavaScript/Intermediate%20JavaScript/fibonacci.js)

### 3.3 The Document Object Model

- It is basically a model that models a webpage in a tree structure.
  - The `head` and `body` are the children of `html` and the `html` is the child of document.
  - We can select elements by different methods like `document.firstElementChild` for `html`, or `document.querySelector` or `document.getElementById`, `document.getElementsByClassName`, `document.querySelector` or `document.querySelectorAll` etc.
  - `document.querySelector` (singular) selects only the first element that the query satisfies whereas `selectorAll` selects all the elements satisfying the query.
  - `document.querySelector("h1").classList.add("huge")`. This adds the class huge to the h1 element or the selected element. This is important for separation of concerns `structure, style, and behaviour.` This means that we can now just focus the styling on the `styles.css` and scripting on `index.js` instead of writing jS like `.style.color=''`.
  - `The Difference between innerHTML and textContent` is that the `innerHTML` will select all the HTML code that resides within the selected element. But the `textContent` will select only the text.
  - `querySelector("element_name").attributes` gives the list of attributes that has been specified for the element. `.getAttribute("attribute_name")` gives the value of the attribute and `.setAttribute("attribute_name")` sets the value of the attribute.

### 3.4 Boss Level Challenge

- [A Dice Game using the concept learned in Section 3.3](./JavaScript/Dice%20Game/)

### 3.5 Advanced JavaScript and DOM manipulation

- [Calculator using higher order functions.](./JavaScript/Drum%20Kit/calculator.js)
- [Drum Kit.](./JavaScript/Drum%20Kit/)
  - A virtual drum set. Using the concept of `addEventListener`, `higher order functions`, `passing functions as parameters`, `playing sounds on website, etc.`
- [An example of defining JavaScript Objects in a simple way.](./JavaScript/Drum%20Kit/jSObjects.js)
- [Constructor Function and creating JavaScript objects using Constructor Function.](./JavaScript/Drum%20Kit/constructor_function.js) `It is important to note that constructor function should be defined with capital letter in the first word.`
- We can create a function for objects as well.

## 4. jQuery

- In jQuery, the `$` sign is used to select element or elements. For example, if there is only one `h1` but five `button` in our html. Then, `$("h1")` will select only that one `h1`, but `$("button")` will select all the buttons. This is much better than `document.querySelector` or `document.querySelectorAll`.
- Code minification reduces the file size, which will help in faster loading of any website. So, if the code is very large then we can use minification tool that reduces all the comments and extra new lines and spaces to minify our code.
- We can use `addClass("")`, or `removeClass("")` to add classes or remove classes from any element.
- Also, `hasClass("")` can be used to check if any class is present in an element or not. It returns a Boolean value.
- The `.text("")` can be used to change the text of selected element.
  - Important to note that if multiple elements are present, it changes the text of all the selected elements.
- The `.html("")` can be used to change the innerHTML.
- The `.attr("")` can be used to access any attribute.
  - It can also be used to change the value of the selected attribute. For example: `$("a").attr("href", "https://google.com")` will change the value of href of `<a>` to `google.com` from whatever it was before.
  - It can also be used to add classes since class is also an attribute of html elements.
- The `.click()` can be used to listen for clicks, `.keypress()`, can be used to listen for keypress.
- Another flexible way to add eventListeners is by using `on("ANY__EVENT")`.
- `.hide()` hides the element and it will affect the HTML flow, `.show()` will show the HTML element, `.toggle` will hide and show alternativeley, `.fadeIn()` will make the animation not so sudden while showing any element, `.fadeOut()` will do the same thing while hiding the element.
  - `fadeToggle()` toggles between fadeIn and fadeOut.
-  `slideUp()` collapses the element whereas `slideDown()` will uncollapse.
   -  `slideToggle()` toggles between slideUp and slideDown.
-  `.animate()` can be used to animate to custom CSS.
   -  Example: `.animate({opacity: 0.5})` will slowly animate the color change.
   -  Important to note that, the CSS inside animate only works for numeric valued properties. Example, we can't change the color to red.
-  We can also chain animations. Example: `$("h1").slideUp().slide(Down).animate({opacity:"50%"});` will first slide up h1, then slideDown, and then finally decreases the opacity to 50%.

### 4.1 The Simon Game
- [Live Demo Here.](https://tangsang2003.github.io/the-simon-game)
- Created the simon game, which is a memory game for remembering sequences.
- Changed the implementation. In the bootcamp, only the latest button is given to remember at each new level, but I implemented in such a way that the whole sequence is given at each level.
- Have used different jQuery concepts. 
- Also, added `help section` and `new sounds`.
- Also, made the game mobile friendly.
- The whole game can be found [here](./jQuery/The%20Simon%20Game/).
- Added detector for if the device accesing the game has touch screen available or not.

## 5. The UNIX Command Line
- All the basic commands and shortcuts needed to get started with UNIX command line is [here](./The-UNIX-command-line/README.md).

## 6. Node.js
- [Intro to Node](./intro-to-node/) `Node packages installation and a simple node program to generate random SuperHero and random superVillain name.`
- `npm init` to initialize a node project.

### 6.1 Expressjs
- [Expressjs Documentation.](https://www.expressjs.com/)
- How to start a server?
```javascript 
const express = require('express');
const app = express();
const port = 3000;

app.get("/", function(req, res) {
  res.send("<h1>Hello world! </h1>");
})
app.listen(port, function() {
  console.log("Server started at port 3000!");
});
```
- Installing `Nodemon`.
`npm install -g nodemon`
  - Nodemon is used to auto restart our server whenever there are any changes to our code.

- [Our First Express Server.](./ExpressJS/my-express-server/)
- The `__dirName` gives the directory of the current file in a server. This works whereever the file is.
- The `body-parser` npm package is needed to access values that were sent during a POST.
  - Always use `app.use(bodyParser.urlencoded({extended: true}));` while using body-parser.
  - The option `extended: true`, allows for posting nested objects.
- [A very simple calculator that only performs sum. Made using the get, post concepts of express.](./ExpressJS/Calculator/)
- [A BMI Calculator using ExpressJS.](./ExpressJS/bmiCalculator/)

## 7. Application Programming Interfaces (APIs)
- Four main things: 
  - Endpoints
  - PATHS
  - Parameters
  - Authentication
- Endpoints are like the first part of API. i.e. the main URL.
- Paths are like branches that defined ahead of time where a user can go to from the endpoint. Example: `__URL__/dark-jokes`. Here `dark-jokes` is a path.
  - There can be many different paths.
- Parameters are like branches that can't be defined ahead of time. They are like parameters given for a query. For, example if we say we want a particular type of joke, then we can pass the type as parameter.
  - The parameters usually follow `?` in the API URL.
  - If more than one parameters, they are separated by `&`.

### 7.1 A very very simple weather app using Node's native `https` package to integrate Open Weather API.
- [Link.](./Application-Programming-Interface/weather-project-simple/)
- Learnt about different response status Codes.
- Refer to MDN docs to learn more about status codes.
- We need to `JSON.parse(data)`, the data received from external API.
  - The data received is in hexadecimal format and is stringified.
  - So, parsing will coonvert it to JavaScript Object.
- Also, `JSON.stringify(__JS__OBJECT)` can be used to stringify any JavaScript object.
- There can be only one `res.send`, but there can be multiple `res.write`.

### 7.2 NewsLetter SignUp
- [Code Here.](./Application-Programming-Interface/Newsletter-SignUp/)
- To use static files in our web application, we need to use, `app.use(express.static("public"));`. Then, we can specify the paths in our html file relative to the public folder.
- To deploy on HEROKU, the port should be dynamic and given by: `process.env.PORT || 3000`.


## 8. Git, GitHub and Version Control
- All the basic git commands and their explanations can be found [here.](./git-github-version-control/README.md)


## 9. EJS (Embedded JavaScript Templating)
- It's like `Jinja2` for `Flask`.
- [EJS Official website.](https://www.ejs.co/)
- To use EJS: 
  - We first use: `app.use("view engine", "ejs");` in our main app.
  - Also, we need to create a `views` directory.
  - Then, in the `__FILENAME__.ejs` inside the `views` directory, we create a template that we are going to use.
  - The variables in that `.ejs` file is written as `<%= __VARIABLE_NAME__ %>`. This variable will be replaced by whatever is sent from our server using `res.render("__FILENAME__.ejs", __VARIABLE_NAME__: __COMPUTED_VARIABLE_NAME_FROM_OUR_SERVER)`.

### 9.1 Running Code inside our EJS template
- For Control Flow we use: `<% ____CODE____ %>`. This is called scriplet tag.
- It should be added to every line of code that is not HTML. 
- In template engines like EJS, the `else` must immediately follow the closing `%>` of the preceding if block, without an intervening `%>`. Example: 
```html
<body>
  <% if (kindOfDay === "Sunday" || kindOfDay === "Saturday") { %>
    <h1 style="color: purple"><%= kindOfDay %> List</h1>
  <% } else { %>
    <h1 style="color: blue"><%= kindOfDay %> List</h1>
  <% } %>
</body>
``` 
- The difference between `var` and `let` is that, a `var` defined inside a codeblock `{}` but not a function i.e. `inside if, else, for ,etc`, is a global variable. But, a `let` is not global but rather a `local` inside the block where it is defined. So is the case for `const` as well.
- It is a good practice to use `let` or `const` as much as possible instead of `var`.

- In express, usually a public folder is created to serve static files.
- To use layouts `<%- include("__.ejs") -%>`

### 9.2 Module Exports and Passing functions
- In node, we can pass functions from module in two ways using `module.exports`.
- If there is only a single function to be passed, then: `module.exports = __FUNCTION__NAME` is enough.
- If there are multiple, then:
```javascript
module.exports = {
  __FUNCTION_1__,
  __FUNCTION_2__
};
```
- In JavaScript, even if an array is constant, we can still push to the array, but can't reasign it to new array.


### 9.3 Project: To do List `Version 1`

- [Project Folder.](./to-do-list-v1/)
-  A simple To do List using `EJS Templating` and `Layouts`.

## 10. A blog website using all the concepts learned till now. Version 1.

- [Project Folder.](./personal-mini-blog/) `This is first version of the project.`

### 10.1 Express Routing Parameters
  ```javascript
  app.get("/news/:topic", function(req, res) {
    console.log(req.params.topic);
  });
  // Now, If I try to access localhost:3000/news/politics. then, it will log politics.
  ```

  - `Note: Use 'rs' to force restart nodemon server :)`
  - In an array of objects in JavaScript, we can use two methods to find if there is any object satisfying some matching conditions or not. They are: 
```javascript 
foundObject = objectArrays.find(__object => __object.__key === "__value");
// This will find the last object that has the value of __value for key of __key.
// OR We can use:
foundObject = objectArrays.filter(__object => __object.__key === "__value");
// This will find all the objects matching the matching conditions.
```

## 10. Databases
- SQL: Structured Query Language
  - Example: MySQL, PostgreSQL
  - Groups data into tables.
  - Requires a schema.
  - Can be inflexible.
  - They are good at modeling relationships between entities.
  - Relational databases.
- NoSQL: Not only Structured Query Language
  - Example: MongoDB, Redis
  - Data represented as JSON objects.
  - Document structure.
  - Flexible to changes.
  - Bit more flexible when storing different types of properties.
  - But, they aren't good at relationships.
  - Non Relational databases.
  - When linking different entities, it might become inefficient than as compared to SQL.
  - It is good in terms of scalability.

### 10.1 SQL
- CRUD
  - Create
  - Read 
  - Update
  - Delete

- Most commonly used SQL Queries can be found in this [README.](./SQL/README.md)

### 10.2 MongoDB
- How to setup? For `Windows`.
  - Download and install.
  - Also download MongoDB shell and unzip and place it inside `____/MongoDB/Server` directory.
  - Go to C: and create a folder called `data` and inside `data/`, create another folder `db`.
  - Go to your terminal.
  - Go to your home directory with `cd ~`
  - Make a hidden file. `touch .bash_profile`
  - Then, `vim .bash_profile`
  - Click `i` key to be able to edit in vim editor. i.e. `INSERT` mode.
  - Then type
  ```bash
  alias mongod="/c/Program\ Files/MongoDB/Server/8.0/bin/mongod.exe"
  alias mongo="/c/Program\ Files/MongoDB/Server/mongosh-2.3.7-win32-x64/bin/mongosh.exe" 
  ```
  - Hit `esc` to exit Insert mode. Then, type `:wq!`
  - Then, in terminal execute `mongod`
  - Start another terminal tab and execute `mongo` to run `mongo shell`.
  - Use `help` in mongo shell for any help.

#### 10.2.1 CRUD operations in MongoDB

- Use the command `show dbs` to list all the available databases.
- To create a new database:
  - `use __DATABASE__NAME__`
- Collections in MongoDB is like a table in SQL.
- Documents are simply just a data row.
So, 
```bash
  db.products.insertOne({_id: 1, name: "pen", price: 1.20})
```
Here, db will be any database that we are currently working on.
- `products` is the collection.
- If `products` don't exist, then the command will create it.
- And the JavaScript Object that we have inserted is a `document`.
- `show collections` command will show all the collections in the current database that we are working on.