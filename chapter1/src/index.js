import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    const buttonText = 'Click Me';
    const labelText = 'Enter Name:';
    const style = {backgroundColor: 'blue', color: 'white'};
     
    return <div>
    <label className="label" htmlFor="name">
        {labelText}
    </label>
    <input id="name" type = "text"/>
    <button style = {style}>
        {buttonText}
    </button>
  </div>
}

ReactDOM.render(<App />, document.querySelector('#root'))