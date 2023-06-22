import React, {useState} from 'react';
import './App.css';

function App() {
  
  const [st7, setSt7] = useState([]);
  let myRef = React.createRef();

  const h1 = React.createElement('h1', {}, 'unit_08');
  const h2 = React.createElement('h2', {'className': 'text-orange'}, 'header 2');
  const p = React.createElement('p', {'style': {'color': 'red'}}, 'this is p');
  const input = React.createElement('input', {defaultValue: 55});
  const p1 = React.createElement('p', {}, 'hi');
  const p2 = React.createElement('p', {}, 'world');
  const div = React.createElement('div', {'className': 'text-grey'}, p1, p2);
  const input2 = React.createElement('input', {'type': 'text', 'ref': myRef});
  const button = React.createElement('button', {'onClick': Handler}, 'Push')

  function Handler() {
    let val = myRef.current.value;
    return val.trim() !== '' ? setSt7([...st7, val]) : null;
  }

  return (
    <>
      {h1}
      {h2}
      {p}
      {input}
      {div}
      {input2}
      {button}
      <ul>
				{st7.map((item, index) => <li key={index}>{item}</li>)}
			</ul>
    </>
  );
}

export default App;
