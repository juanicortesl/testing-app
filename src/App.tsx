import React from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = React.useState('red');
  const [disabled, setDisabled] = React.useState(false);
  return (
    <div >
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(buttonColor === 'red' ? 'blue' : 'red')}
        disabled={disabled}
      >Change to {
          buttonColor === 'red' ? 'blue' : 'red'}</button>
      <input type="checkbox" onClick={() => {
        setDisabled(!disabled);
      }} />
    </div>
  );
}

export default App;
