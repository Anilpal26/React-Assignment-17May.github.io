28-Aug-Test

Q.1 Is react a framework or a library and what is the difference between the two?
Ans React is a library, which is introduced by facebook.
    difference : Libraries provide developers with predefined functions and classes to make their work easier and boost the development process. Framework, on the other hand, is like the foundation upon which developers build applications for specific platforms.

Q.2 What all information is stored in package.json and how is it different from package-lock.json?
Ans Your package. json holds important information about the project. It contains human-readable metadata about the project (like the project name and description) as well as functional metadata like the package version number and a list of dependencies required by the application.
package-lock. json is automatically generated for any operations where npm modifies either the node_modules tree, or package. json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.

Q.3 Does React uses Html? Explain.
Ans With React, we write HTML using JavaScript. We rely on the power of JavaScript to generate HTML that depends on some data, rather than enhancing HTML to make it work with that data. Enhancing HTML is what other JavaScript frameworks usually do.

Q.4 Briefly describe what is the use of the following in react js?
App.js
Index.js
app.css
index.html
Ans 
App.js - App. js is your App component, whereas index. js is the "entry point" for your application. The index. js contains the logic for rendering your App component and provides it with any necessary props (either directly, or via contexts).
 
Index.js - Regarding React, index. js is where you would usually mount/render your main react component onto your “root” element(which you mark in your html).

index.html - index. html is the main HTML file of our app that includes your React code and provides a context for React to render to. Let's take a look at the file: Specifically, it includes a div that your react app will show up inside. This is also called mounting point for react app.

app.css - CSS in React is used to style the React App or Component. The style attribute is the most used attribute for styling in React applications, which adds dynamically-computed styles at render time. It accepts a JavaScript object in camelCased properties rather than a CSS string.