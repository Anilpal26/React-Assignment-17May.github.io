 04-September Trst

Q.1 What are components in React?
Ans- A Component is one of the core building blocks of React. In other words, we can say that every application you will develop in React will be made up of pieces called components. Components make the task of building UIs much easier. You can see a UI broken down into multiple individual pieces called components and work on them independently and merge them all in a parent component which will be your final UI. 


Q.2  What are props in React?
Ans- In ReactJS, the props are a type of object where the value of attributes of a tag is stored. The word “props” implies “properties”, and its working functionality is quite similar to HTML attributes. 
Basically, these props components are read-only components. In ReactJS, the data can be passed from one component to another component using these props, similar to how the arguments are passed in a function. Inside the component, we can add the attributes called props; however, we cannot change or modify props inside the component as they are immutable. 

Q.3 How to Use CSS in React
Explain all methods by using a small code snippet.
Ans- React is a JavaScript library for building user interfaces. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

There are about eight different ways to styling React Js components, there names and explanations of some of them are mentioned below.

Inline CSS
Normal CSS
CSS in JS
Styled Components
CSS module
Sass & SCSS
Less
Stylable


Q.4 What's the Use of the useMemo() Hook?
Explain by giving an example.
Ans- The useMemo is a hook used in the functional component of react that returns a memoized value. In Computer Science, memoization is a concept used in general when we don’t need to recompute the function with a given argument for the next time as it returns the cached result. A memoized function remembers the results of output for a given set of inputs. For example, if there is a function to add two numbers, and we give the parameter as 1 and 2 for the first time the function will add these two numbers and return 3, but if the same inputs come again then we will return the cached value i.e 3 and not compute with the add function again. In react also, we use this concept, whenever in the React component, the state and props do not change the component and the component does not re-render, it shows the same output. The useMemo hook is used to improve performance in our React application.

Example:- 
import React, {useState} from 'react';
  
function App() {
  const [number, setNumber] = useState(0)
  // Using useMemo
  const squaredNum = useMemo(()=> {
    return squareNum(number);
  }, [number])
  const [counter, setCounter] = useState(0);
  
 // Change the state to the input
  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  }
    
  // Increases the counter by 1
  const counterHander = () => {
    setCounter(counter + 1);
  }
  return (
    <div className="App">
      <h1>Welcome to Geeksforgeeks</h1>
      <input type="number" placeholder="Enter a number"
          value={number} onChange={onChangeHandler}>
      </input>
        
      <div>OUTPUT: {squaredNum}</div>
      <button onClick= {counterHander}>Counter ++</button>
      <div>Counter : {counter}</div>
    </div>
  );
}
  
// function to square the value
function squareNum(number){
  console.log("Squaring will be done!");
  return Math.pow(number, 2);
}
  
export default App;

