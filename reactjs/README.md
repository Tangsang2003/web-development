# 15. React.JS

- [15. React.JS](#15-reactjs)
  - [15.1 Introduction to JSX and Babel](#151-introduction-to-jsx-and-babel)
  - [15.2 JavaScript Expressions in JSX and ES6 Template Literals](#152-javascript-expressions-in-jsx-and-es6-template-literals)
  - [15.3 JSX Attributes and Styling React Elements](#153-jsx-attributes-and-styling-react-elements)
  - [15.4 ReactJS components](#154-reactjs-components)

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

