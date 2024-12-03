# Web Development 🌐

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
- The `.html*("")` can be used to change the innerHTML.
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
- Created the simon game, which is a memory game for remembering sequences.
- Changed the implementation. In the bootcamp, only the latest button is given to remember at each new level, but I implemented in such a way that the whole sequence is given at each level.
- Have used different jQuery concepts. 
- Also, added help section and new sounds.
- The whole game can be found [here](./jQuery/The%20Simon%20Game/).

