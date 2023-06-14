import './App.css';
import React from 'react';


function App() {
  let count4 = 0;
  let t2 = React.createRef();
  let t5 = React.createRef();
  let t6 = React.createRef();
  let t7 = React.createRef();
  let t8 = React.createRef();
  let t9 = React.createRef();
  let t10 = React.createRef();

  function task1() {
    console.log('task2');
  }
  function task2() {
    t2.current.classList.add('active');
  }
  function task3(event) {
    console.log(event.target.value);
  }
  function task4() {
    console.log(++count4);
  }
  function task5(event) {
    event.target.checked ? t5.current.innerHTML = event.target.value : t5.current.innerHTML = 0;
  }
  function task6(event) {
    t6.current.innerHTML = event.target.value;
  }
  function task7() {
    function randomInt(a, b) {
      return Math.floor(Math.random() * (b - a + 1) + a);
    }
    let str = `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
    t7.current.style.background = str;
  }
  function task8(event) {
    isNaN(+event.key) ? t8.current.innerHTML += '0' : t8.current.innerHTML += '1';
  }
  function task9(event) {
    t9.current.innerHTML = event.target.value;
  }
  let ar10 = [5, 6, 7];
  function task10() {
    ar10.push(+t10.current.value);
    console.log(ar10);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2} ref={t2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentvalue="55" onChange={task5}/>
        <div className="out-5" ref={t5}></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6" ref={t6}></div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={t7}></div>
        <button className="task-7" onClick={task7}>Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div className="out-8" ref={t8}></div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div className="out-9" ref={t9}></div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={t10}></input>
        <button className="task-10" onClick={task10}>Push</button>
      </section>
    </>
  );
}

export default App;
