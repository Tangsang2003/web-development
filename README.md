# Web Development Bootcamp 🌐
This repository contains all the resources and mini projects I've completed while learning about web development.

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
- [Arrays](./JavaScript/Intermediate%20JavaScript/guest_list.js) `array_name.includes(varabile_name) to check if the variable exists in the array or not.`
- [FizzBuzz](./JavaScript/Intermediate%20JavaScript/fizzbuzz.js) `A fun game. Usage of conditionals and operators.`
- [FizzBuzz using While Loop.](./JavaScript/Intermediate%20JavaScript/while_fizzbuzz.js)
- [99 Bottles of Beer on the Wall.](./JavaScript/Intermediate%20JavaScript/99_bottles_of_beer.js)
- [FizzBuzz using For loop.](./JavaScript/Intermediate%20JavaScript/for_fizzbuzz.js) `Use while loop to check for state, and for loop to iterate.`
- [Fibonacci Sequence Generator.](./JavaScript/Intermediate%20JavaScript/fibonacci.js)

### 3.3 The Document Object Model
- It is basically a model that models a webpage in a tree structure. 
  - The `head` and `body` are the children of `html` and the `html` is the child of document.
  - We can select elements by different methods like `document.firstElementChild` for `html`, or `document.querySelector` or `document.getElementById`, `document.getElementsByClassName`, `document.querySelector` or `document.querySelectors` etc.
  - `document.querySelector` (singular) selects only the first element that the query satisfies whereas `selectors` selects all the elements satisfying the query.
  - `document.querySelector("h1").classList.add("huge")`. This adds the class huge to the h1 element or the selected element. This is important for separation of concerns `structure, style, and behaviour.` This means that we can now just focus the styling on the `styles.css` and scripting on `index.js` instead of writing jS like `.style.color=''`.
  - `The Difference between innerHTML and textContent` is that the `innerHTML` will select all the HTML code that resides within the selected element. But the `textContent` will select only the text.
  - `querySelector("element_name").attributes` gives the list of attributes that has been specified for the element. `.getAttribute("attribute_name")` gives the value of the attribute and `.setAttribute("attribute_name")` sets the value of the attribute.
  