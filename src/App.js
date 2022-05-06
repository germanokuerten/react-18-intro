import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello"
import Button from "./components/Button.js"

// // This is a component
// function Hello() {
//   return <h1> Hello World </h1>
// }

function App() {

  // // You can create this function/component here
  // // but it may not be practical, 
  // // and it will only exist inside this App() scope
  // function Cheese() {
  //   return <h2> I love Cheese!</h2>
  // }

  return (
    <>
      <div className="App">
        <Hello />
        <Hello />
        <Hello />
        <Button />
        <Button />
        <Button />
      </div>
      <h2>Hello Cheese</h2>
    </>    
  );
}

export default App;
