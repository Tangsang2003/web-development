# 15. React.JS

- [15. React.JS](#15-reactjs)
  - [15.1 Introduction to JSX and Babel](#151-introduction-to-jsx-and-babel)
  - [15.2 JavaScript Expressions in JSX and ES6 Template Literals](#152-javascript-expressions-in-jsx-and-es6-template-literals)
  - [15.3 JSX Attributes and Styling React Elements](#153-jsx-attributes-and-styling-react-elements)
  - [15.4 ReactJS components](#154-reactjs-components)
    - [15.4.1 ReactJS components Practice:](#1541-reactjs-components-practice)
    - [15.4.2 JavaScript ES6 Import, Export and Modules](#1542-javascript-es6-import-export-and-modules)
  - [15.5 React Props](#155-react-props)
  - [15.6 React DevTools](#156-react-devtools)
  - [15.7 Mapping Components](#157-mapping-components)
    - [15.7.1 Mapping Components Practice - Emojipedia](#1571-mapping-components-practice---emojipedia)
    - [15.7.2 Map, Filter and Reduce](#1572-map-filter-and-reduce)
  - [15.8 Conditional Rendering with Ternary Operator and AND Operator](#158-conditional-rendering-with-ternary-operator-and-and-operator)
    - [15.8.1 Conditional Rendering Code Practice](#1581-conditional-rendering-code-practice)
  - [15.9 Imperative V.S. Declarative Programming](#159-imperative-vs-declarative-programming)
    - [15.9.1 React Hooks useState](#1591-react-hooks-usestate)
    - [15.9.2 React useState hook practice](#1592-react-usestate-hook-practice)
  - [15.10 Array and Object Destructuring](#1510-array-and-object-destructuring)
  - [15.11 Event Handling in React](#1511-event-handling-in-react)
  - [15.12 React Forms](#1512-react-forms)
    - [15.12.1 Handling Complex State in React](#15121-handling-complex-state-in-react)
  - [15.13 JavaScript ES6 Spread Operator](#1513-javascript-es6-spread-operator)
  - [15.14 To Do List App](#1514-to-do-list-app)

---



What is React?
- A javaScript library for building user interfaces.
- Breaking down apps to components that are reusable and customizable.
- It's like defining our own HTML components, defining its functions, properties, etc.
- React combines small ammounts of html, css, js into a single component.
- Components can listen to changes and update themselves without affecting other components.

## 15.1 Introduction to JSX and Babel
- `<div id="root"></div>` is always used in all React apps.
  - Inside this is where we put everything we create in React.
- JSX helps in writing plain HTML directly in javaScript file.
- Babel is a javaScript compiler.
- Babel converts any next generation javaScript code to a form/vanilla javaScript, that is understandable by all the browsers.
- The starter code for any react app can be found [here.](./JSX-and-Babel/)
- [Code Practice 1](./code-practice-1/index.js): A h1 title and three items in unordered list.

## 15.2 JavaScript Expressions in JSX and ES6 Template Literals
- [How to inject javaScript expressions inside HTML inside javaScript?](./javascript-expressions-and-es6-literals/index.js)
- [Code Practice 2 ES6 Template Literals.](./javascript-expressions-and-es6-literals/code-practice-2-javascript-expressions/index.js) 

## 15.3 JSX Attributes and Styling React Elements
- [How to add HTML attributes and CSS styling to react elements? ](./jsx-attributes-and-styling-react-elements/)
  - [JavaScript / React code](./jsx-attributes-and-styling-react-elements/src/index.js)
  - [HTML code](./jsx-attributes-and-styling-react-elements/public/index.html)
  - [CSS code](./jsx-attributes-and-styling-react-elements/public/styles.css)
- [Inline Styling in JSX](./inline-styling-in-JSX/src/index.js)
  - Remember to always use camelCase instead of kebab-case while defining CSS properties inside javascript object while passing for inline styling.
- [React Styling Practice](./react-styling-practice/src/index.js)
  - A `<h1>` is generated saying either Good Morning, Good Afternoon or Good Evening accordint to user's time.
  - Inline styling is applied to color titles according to time.
  - Style for the title has been added from stylesheet.

## 15.4 ReactJS components
- Components allows us to break a webpage into parts or to make the code more modular. 
- We can make separate `.jsx` files or a function that returns the HTML elements that we want to render using `ReactDOM.render()`.
- For, example [here](./react-components/src/), we have created two components `Heading.jsx` and `List.jsx`. Both of them have functions that returns the required HTML elements. 
- Then, by importing the components, it is like defining custom HTML elements, we can put them into our webpage structure in `ReactDom.render()`.
- To make code even modular, instead of importing everything in `index.js`, we create an `App.jsx` that will import all the separate components and then sends the required components to the `index.js`, so that the whole page can be rendered with just `<App />`.

### 15.4.1 ReactJS components Practice:
- [Here](./react-components-practice/), we have divided the `React Styling Practice`'s code into components `Heading` and `App`.

### 15.4.2 JavaScript ES6 Import, Export and Modules
- Used to separate different functionalities into different files.
- In ES6, we can directly use `import` and `export` instead of `modules.export`.
- There can only be one default export from each file.
- But, we can export multiple functions or constants from each file.
- The implementation of importing different functions in [index.js](./es6-import-export-and-modules/src/index.js) from [math.js](./es6-import-export-and-modules/src/math.js).


## 15.5 React Props
- They are react component's properties.
- We can pass custom values to the React component's function.
- This can help us with dynamic react components instead of hard-coded ones.
- [This](./react-props/src/index.js) shows how props can be used to create dynamic components.
- [React Props Code Practice.](./react-props-code-practice/src/index.js)
  - A contacts card page.
  - [Dynamic Card Component using Props](./react-props-code-practice/src/components/Card.jsx)
  - [Props passed from App.jsx](./react-props-code-practice/src/components/App.jsx)
  - Imported Contacts from `contacts.js`.

## 15.6 React DevTools
- It helps in debugging React components.
- It is an extension available for Chrome based browser and firefox.
- It helps in identifying different props that are passed when creating multi-level compoents.
- It also helps us navigate the overall app structure.
- We have broken down the `React Props Code Practice` code into sub-components by breaking the card compoenent into the `Avatar` component that contains image and `Detail` component that contains the details of the person in the card.
- The code for components can be found [here.](./react-devtools/src/components/)

## 15.7 Mapping Components
- `contacts.map()` where contacts is a list/array, it will go through each contact and then apply the function that has been passed to `.map()`.
- While using loops like this, each React component that needs to be rendered should have a unique `key`.
- This `key` needs to be passed but it is not a prop.
- The code demonstrating this concept can be found [here.](./mapping-components/).
- Check [here](./mapping-components/src/components/App.jsx) how a new function has been created to render a card and how the mapping function has been used.
- Check [here](./mapping-components/src/components/Card.jsx) how the key is not a prop.

### 15.7.1 Mapping Components Practice - Emojipedia
- A emojipedia like webpage was created using the concepts learned during Mapping Components.
- It can be found [here.](./mapping-components-practice/)

### 15.7.2 Map, Filter and Reduce
- `Map` applies some function to the specified array and then returns a new array that is created by applying that function. 
- `Filter` creates or returns a new array that satisfies some condition.
- `Reduce` accumulates a value by doing something to each item in an array or list. Example: Sum of all elements in the list.
- `Find` finds the first element that satisfies the given condition. It doesn't loop through the entire loop if an element satisfying the given condition is already found.
- `findIndex` on the other hand is similar to find but it returns the index of the element.
-  [This](./map-filter-reduce/src/index-initial.js) contains the basics and definition of all the above terms.
-  [This](./map-filter-reduce/src/index.js) contains practice code that imports a list from emojipedia and then creates a new list that has only the meaning of each emoji that is truncated to 100 characters.
-  

## 15.8 Conditional Rendering with Ternary Operator and AND Operator
The ternary operator works like this: 
```javaScript 
CONDITION ? DO IF TRUE : DO IF FALSE
// Example:
// isRaining ? bringUmbrella : bringSunScreen;
```
- This ternary operator will convert if statements to expression so it can be used for conditional rendering in React JSX.
- If we want to return nothing then we give null;
``` javaScript
CONDITION ? DO IF TRUE : null
```
- A better way to render will be using the AND operator like this:
```javaScript
  CONDITION && EXPRESSION
  // The expression will be the code that needs to be rendered if the condition is true.
  // This works because when left side is true then only the right side will be evaluated, if the left side is arealdy false then the right side won't be evaluated and hence won't be rendered.
```
- The examples are illustrated in the form of Login form [here.](./conditional-rendering/)
### 15.8.1 Conditional Rendering Code Practice
- A login and register page.
- If user is registered, change the form to be a login form.
- If user isn't registered, then modify the form to be a register form.
- [Code can be found here.](./conditional-rendering-practice/src/)

## 15.9 Imperative V.S. Declarative Programming
- In React, declarative programming is the preferred paradigm, where you describe what the UI should look like and let React handle the details. 
- Declarative Programming: Focuses on what you want the code to achieve without explicitly detailing how it should happen.
- Imperative Programming: Focuses on the how by explicitly defining steps to achieve a result.
- We can think of UI as a function of state.
- We need hooks to tap/hook into state of UI/APP and modify it.

### 15.9.1 React Hooks useState
- ReactDOM.render() renders the HTML elements. So, if the elements contain any expressions, then only the initial expression is shown on the webpage. If the expressions are updated, but the page is not re-rendered, then there will be no changes on the page.
- So, for that, we use Hooks. 
- Hooks must be used inside a functional component. 
- This means we have to use a function that creates a component and then we have to use hooks inside it.
- Destructuring example: `const [red, gree, blue] = [9, 132, 114]`.
- Now, console logging red gives 9.
- An example showing the usage of `useState` hook is shown [here.](./usestate-hook/src/components/App.jsx)

### 15.9.2 React useState hook practice
- A simple digital clock was made using the concept of useState hook.
- The source code can be found [here.](./usestate-hook-practice/src/components/App.jsx)

## 15.10 Array and Object Destructuring
```javaScript
// If there is an array of objects of animals, we can destructure like this: 

const [cat, dog] = animals; // This is under the assumption that animals is an array that has two objects. cat will now contain the first object, and dog the second.

const {name, sound} = cat; // Now, since cat is an object, we destructure it like this.
```
- An important thing to note is that we can name the values anything while destructuring array but while destructuring objects, we have to name the variables that match with the object properties.
- Or, if we want to name differently while destructuring object, we have to do it like this: 
```javaScript 
  const {name: catName, sound: catSound};
```
- To give default value to object: 
```javaScript 
const {name="Fluffy", sound} = cat; //Here, if the cat object has no property called name, then the default will be Fluffy.
```
- To destructure nested objects, we do something like this: 
```javaScript 
// Lets assume there is a nested object called feedingRequirements inside cat object
{name, sound, feedingRequirements : {food, water}} = cat;
// Now, food will contain the value given by cat.feedingRequirements.food
```
- A practice code example can be found [here.](./es6-destructuring/src/index.js)

## 15.11 Event Handling in React
- How are events like mouse click, mouse hover, etc handled using hooks?
- [Here, in this example](./event-handling-in-react/src/components/App.jsx), a simple page has been built that changes the title when a button is clicked and the background color of the button changes on hover and when out of hover goes back to normal.

## 15.12 React Forms
- When an element triggers events like `onClick`, `onChange`,etc, an object will be passed to the function specified. 
```javaScript 
// For example
<input onChange={handleChange}/> // When there is change and handleChange is triggered.
function handleChange(event) { // This event object is passed as well
  console.log(event.target.value);
  // event is the event that triggered the change.
  // target is the component that triggered the chaange.
  // Value is the value that is currenty in the target.
  console.log(event.target.placeholder);
}
```
- We use controlled components in React because it helps in better manipulation, management, real-time updates, validations, etc.
- Using controlled components, React will have full control over the form elements' value instead of DOM storing it, so it will help in better debugging as well.
- `event.preventDefault()` can be used to prevent the default behaviour on form submit.
- An example code showcasing basic React forms, and how different events are handled inside the form can be found [here.](./react-forms/src/components/App.jsx)

### 15.12.1 Handling Complex State in React
- When we use `useState` hook, the initial state can be a javaScript object and not just string only.
- When handling complex object and using the set functions, how do we handle different key-values of the objects when the same function is being invoked by different inputs to handle the change?
- We will need access to previous key-values.
- We can do that simply by passing a function to the set function `example: setFullName` function . The function that is being passed will have access to the previous state of the object or anything that is being changed.
- Then the function will return the updated complex object with only the modified fields updated and all other values remaining intact.
- Also, we need to note that we shouldn't directly use the `events` while updating the state because it is a synthetic event. It should be stored in a separate variable.
- A complete code example showcasing the concepts above can be found [here.](./changing-complex-state/src/components/App.jsx)
- [Practice Code of Handling Complex State.](./changing-complex-state-practice/src/components/App.jsx)

## 15.13 JavaScript ES6 Spread Operator 
- How do we combine two arrays in JavaScript?
- We can iterate through one of the arrays and then push each item to another array.
- But, a better approach would be to use javaScript spread operator which is simply `...`
```javaScript
// Example
let veggies = ['potato', 'cauliflower'];
let food = ['apple', 'banana'];
// We can now combine like this simply:
let foodOne = ['apple', 'banana', ...veggies];
// We can insert the veggies in any position like: 
let foodTwo = ['apple', ...veggies, 'banana'];
```
- We can also use the same concept in terms of object.
```javaScript 
// Example
let fullName = {
  fName: "James",
  lName: "Bond"
};
let user = {
  ...fullName,
  username: "jamesbond007",
  address: "Nepal"
}
```
- The code above is not the same as just adding fullName. If we just add fullName, then the object will be added/nested inside user, but in the code above, the object `fullName` will be spread and only its contents are used in the `user` object.
- Using the concept of ES6 Spread operator, the practice code of `handling complex state` has been modified like [this.](./es6-spread-operator/src/components/App.jsx)
- In JavaScript, when you create an object, writing `{ name: "" }` will create a key literally named `"name"`, not using the value of the variable `name`. To use the value stored in the variable `name` as the key, you need to wrap it in square brackets. This syntax is known as *computed property names* in ES6. For example:

```js
const name = "firstName";
const obj = {
  [name]: ""  // This creates a key "firstName" with an empty string as its value.
};
```
- Using `[name]` tells JavaScript to evaluate the variable and use its value as the key name.

## 15.14 To Do List App
- A new to do list app using the concepts of spread operator, map, useState hooks, can be found [here.](./es6-spread-operator-practice/src/components/App.jsx)