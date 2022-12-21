import React from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = React.useState('red');
  return (
    <div >
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(buttonColor === 'red'? 'blue': 'red')}
      >Change to {
           buttonColor === 'red'? 'blue': 'red'}</button>
    </div>
  );
}

export default App;
