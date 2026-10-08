import { useState } from 'react'
import './App.css'

function CalcDisplay({ DisplayValue, backgroundColor }) {
  return (
    <div
      className={`Display ${DisplayValue === 'Shawn Kent S. Prades' ? 'name-display' : ''}`}
      style={{ backgroundColor }}
    >
      {DisplayValue}
    </div>
  );
}

const opColors = {
  '+': '#003b1f',
  '-': '#3b0000',
  'x': '#3b2f00',
  '÷': '#00253b',
  'C': '#5e5e5c',
  '=': '#464542',
  'Prades': '#000000', // Added background color for custom name button
  '1':'#000000bb','2':'#000000bb','3':'#000000bb','4':'#000000bb',
  '5':'#000000bb','6':'#000000bb','7':'#000000bb','8':'#000000bb',
  '9':'#000000bb','0':'#000000bb'
};

function CalcButton({ buttonLabel, onClick }) {
  return (
    <button className='Button' onClick={onClick}>
      {buttonLabel}
    </button>
  );
}

function App() {
  const [DisplayValue, setDisplayValue] = useState('0');
  const [displayBg, setDisplayBg] = useState('#000000');

  const [operand1, setOperand1] = useState(null);
  const [operand2, setOperand2] = useState(null);
  const [operator, setOperator] = useState(null);

  const buttonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerText;

    // Change background color based on button pressed
    if (opColors[value]) {
      setDisplayBg(opColors[value]);
    } else {
      setDisplayBg('#000000');
    }

    // 1. Clear button
    if (value === 'C') {
      setDisplayValue('0');
      setOperand1(null);
      setOperand2(null);
      setOperator(null);
      return;
    }


    
    // 2. Custom Name Button ("Prades")
function CalcDisplay({ DisplayValue, backgroundColor }) {
  // Check if your full name is currently displayed
  const isName = DisplayValue === 'Shawn Kent S. Prades';

  return (
    <div 
      className={`Display ${isName ? 'name-display' : ''}`} 
      style={{ backgroundColor }}
    >
      {DisplayValue}
    </div>
  );
}

// Inside buttonClickHandler:
// 2. Custom Name Button ("Prades")
if (value === 'Prades') {
  setDisplayValue('Shawn Kent S. Prades');
  setOperand1(null);
  setOperand2(null);
  setOperator(null);
  return;
}




    // 3. Operator keys (+, -, x, ÷)
    if (['+', '-', 'x', '÷'].includes(value)) {
      setOperator(value);
      setDisplayValue(value);
      return;
    }

    // 4. Equals key (=)
    if (value === '=') {
      if (operand1 !== null && operand2 !== null && operator !== null) {
        let result = 0;

        if (operator === '+') {
          result = parseFloat(operand1) + parseFloat(operand2);
        } else if (operator === '-') {
          result = parseFloat(operand1) - parseFloat(operand2);
        } else if (operator === 'x') {
          result = parseFloat(operand1) * parseFloat(operand2);
        } else if (operator === '÷') {
          result = parseFloat(operand2) !== 0 ? parseFloat(operand1) / parseFloat(operand2) : 'Error';
        }

        setDisplayValue(String(result));
        setOperand1(String(result));
        setOperand2(null);
        setOperator(null);
      }
      return;
    }

    // 5. Number Stacking (Concatenation)
    if (operator === null) {
      if (operand1 === null) {
        setOperand1(value);
        setDisplayValue(value);
      } else {
        const stackedValue = operand1 + value;
        setOperand1(stackedValue);
        setDisplayValue(stackedValue);
      }
    } else {
      if (operand2 === null) {
        setOperand2(value);
        setDisplayValue(value);
      } else {
        const stackedValue = operand2 + value;
        setOperand2(stackedValue);
        setDisplayValue(stackedValue);
      }
    }
  };

return (
  <div className='App'>
    <div className='Header'>Calculator of Shawn Kent Prades - IT3A</div>
    <div className='Calculator'>
      <CalcDisplay DisplayValue={DisplayValue} backgroundColor={displayBg} />
      <div className='Keypad'>
        <CalcButton buttonLabel={7} onClick={buttonClickHandler}/>
        <CalcButton buttonLabel={8} onClick={buttonClickHandler}/>
        <CalcButton buttonLabel={9} onClick={buttonClickHandler}/>
        <CalcButton buttonLabel={'÷'} onClick={buttonClickHandler}/>
        <CalcButton buttonLabel={4} onClick={buttonClickHandler}/>
        <CalcButton buttonLabel={5} onClick={buttonClickHandler}/>
        <CalcButton buttonLabel={6} onClick={buttonClickHandler}/>
        <CalcButton buttonLabel={'x'} onClick={buttonClickHandler}/>
        <CalcButton buttonLabel={1} onClick={buttonClickHandler}/>
        <CalcButton buttonLabel={2} onClick={buttonClickHandler}/>
        <CalcButton buttonLabel={3} onClick={buttonClickHandler}/>
        <CalcButton buttonLabel={'-'} onClick={buttonClickHandler}/>
        <CalcButton buttonLabel={"C"} onClick={buttonClickHandler}/>
        <CalcButton buttonLabel={0} onClick={buttonClickHandler}/>
        <CalcButton buttonLabel={'='} onClick={buttonClickHandler}/>
        <CalcButton buttonLabel={'+'} onClick={buttonClickHandler}/>
      </div>
      <div className='surnameBtn'>
          <CalcButton buttonLabel={'Prades'} onClick={buttonClickHandler}/>
        </div>
    </div>
  </div>
);
}

export default App;