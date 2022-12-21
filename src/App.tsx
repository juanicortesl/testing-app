import React from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = React.useState('MediumVioletRed');
  const [disabled, setDisabled] = React.useState(false);
  return (
    <div >
      <button
        style={{ backgroundColor: disabled ? 'gray': buttonColor }}
        onClick={() => setButtonColor(buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed')}
        disabled={disabled}
      >Change to {
          buttonColor === 'MediumVioletRed' ? 'Midnight Blue' : 'Medium Violet Red'}
      </button>
      <input type="checkbox" onClick={() => {
        setDisabled(!disabled);
      }} id="disable-button-checkbox" />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
