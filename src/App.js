import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello"
import Button from "./components/Button"
import Image from "./components/Image"
import Counter from"./components/CounterEx"

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

        <Counter />

        <Hello />
        <Hello />
        <Hello />
        <Button text="Hello"/>
        <Button text="Cheese"/>
        <Button text="Bread"/>

        {/* Anything passed in btw the opening and closing tag gets passed on as a prop, and is called "children" */}
        <Button text="Canjica"> Hello World children </Button>

        <Button>{5+5+5}</Button>

        {/* Image is the component and src is the prop */}

        <Image src="https://cdn.royalcanin-weshare-online.io/UCImMmgBaxEApS7LuQnZ/v2/eukanuba-market-image-puppy-beagle?w=5596&h=2317&rect=574,77,1850,1045&auto=compress,enhance" alt="puppy" anarray={[1,2,3]}/>

      </div>
      <h2>Hello Cheese</h2>
    </>    
  );
}

export default App;
