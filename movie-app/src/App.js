import './App.css';

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
  return (
    <div className="App">
      <>
        <h1>Hello {name}</h1>
        <Person name = {'RX7'} year = {'2005'}/>
        <Person name = {'R34'} year = {'2003'}/>
        <Person name = {'Corolla'} year = {'1998'}/>
      </>
    </div>
  );
}

export default App;
