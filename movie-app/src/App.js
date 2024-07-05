import './App.css';

const Person = () => {
  return (
    <>
      <h1>HEHEHEHEH</h1>
      <h2>hahahah</h2>
    </>
  )
}

const App = () => { // Arrow Function
  const name = 'John';
  return (
    <div className="App">
      <>
        <h1>Hello {name}</h1>
        <Person />
      </>
    </div>
  );
}

export default App;
