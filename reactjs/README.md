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