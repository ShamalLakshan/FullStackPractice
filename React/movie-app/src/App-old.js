import './App.css';
import {useState, useEffect} from 'react';

//Component
const Person = (props) => {
  return (
    <>
      <h1>Name : {props.name}</h1>
      <h2>Year : {props.year}</h2>
    </>
  )
}

const App = () => { // Arrow Function
  const name = 'John';
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(100);
  }, [counter])
  return (
    <div className="App">
      <>
        <h1>Hello {name}</h1>
        <Person name = {'RX7'} year = {'2005'}/>
        <Person name = {'R34'} year = {'2003'}/>
        <Person name = {'Corolla'} year = {'1998'}/>
        

        <button onClick = {() => setCounter((prevCount) => prevCount - 1)}> - </button>
        <h2>{counter}</h2>
        <button onClick = {() => setCounter((prevCount) => prevCount + 1)}> + </button>
      </>
    </div>
  );
}

export default App;
