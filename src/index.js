import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function soma(a, b) {
  return a + b;
}


function primeiroJSX() {
  return (
     <div className="test">
       Nelson Hernandez - Curso de React JS
       <h1>Soma: {soma(10, 20)}</h1>
     </div>
  )
}

const App = () => {
  return (
    <div className= "App">
      {primeiroJSX()}
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
