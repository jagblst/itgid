import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  const [st1, setSt1] = useState('');
  const [st2, setSt2] = useState(0);
  const [st3, setSt3] = useState('');
  const [st4, setSt4] = useState(0);
  const [st5, setSt5] = useState('');
  const [st6, setSt6] = useState('');
  const [st7, setSt7] = useState('');
  const [st8, setSt8] = useState('');
  const [st9, setSt9] = useState('');
  const [st10, setSt10] = useState([]);
  let r1 = React.createRef();
  let r10 = React.createRef();
  
  function task1(e) {
    setSt1(r1.current.value)
  }
  function task2() {
    setSt2(st2 + 1)
  }
  function task3(e) {
    setSt3(e.target.value)
  }
  function task4() {
    setSt4(st4 + 1)
  }
  function task5(e) {
    let res = e.target.checked ? e.target.value : 0;
    setSt5(res)
  }
  function task6(e) {
    setSt6(e.target.value)
  }
  function task7() {
    function randomInt(a = 0, b = 255) {
      return Math.floor(Math.random() * (b - a + 1) + a);
    }
    let str = `rgb(${randomInt()},${randomInt()},${randomInt()})`;
    setSt7(str)
  }
  
  function task8(e) {
    let res = st8;
    (!isNaN(+e.key) && e.key.trim() !== '') ? res += 1 : res += 0;
    setSt8(res)
  }
  function task9(e) {
    setSt9(e.target.value)
  }
  function task10() {
    setSt10([...st10, r10.current.value])
    r10.current.value = ''
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
	    	<input type="text" ref={r1}/>
        <button className="task-1" onClick={task1}>Push</button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3}/>
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentvalue="55" onChange={task5}/>
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" style={{background: st7}}></div>
        <button className="task-7" onClick={task7}>Color</button>
        <div>{st7}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={r10}></input>
        <button className="task-10" onClick={task10}>Push</button>
        <div>{st10}</div>
      </section>
    </>
  );
}

export default App;
