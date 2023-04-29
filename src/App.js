import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Operation from './components/Operation';

const App = () =>  {

  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState('');

  const [result, setResult] = useState('');

   const allClear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperation('');
    setResult('');
  }

  const add = (str) => {
    if (str === '÷' || str === '*' || str === '-' || str === '+') {
      if(firstNumber !== '') {
        setOperation(str);
      }
    } else {
      console.log(result)
      if (result !== '') {
        allClear();
        console.log('Здесь');
        setFirstNumber(`${firstNumber}${str}`)
      } else {
        console.log(`ТУТ`);
        operation === '' ? setFirstNumber(`${firstNumber}${str}`) : setSecondNumber(`${secondNumber}${str}`);
      }
    }
  };

  const evaluate = () => {

    const first = parseFloat(firstNumber);
    const second = parseFloat(secondNumber);

    // eslint-disable-next-line default-case
    switch(operation) {
      case '÷':
        setResult(first / second);
        break;
      case '*':
        setResult(first * second);
        break;
      case '-':
        setResult(first - second);
        break;
      case '+':
        setResult(first + second);
        break;
    }
  };

  return (
    <div className="App">
      <div className='calculator'>
        <Input  firstNumber={firstNumber} 
                secondNumber={secondNumber} 
                operation={operation} 
                result={result} 
        />
        <div className='row'>
          <Button symbol='C' click={allClear} />
          <Operation operation='+/-'  />
          <Operation operation='%' click={add} />
          <Operation operation='÷' color='rgb(139 77 255)' click={add}/>
        </div>
        <div className='row'>
          <Button symbol='7' click={add} />
          <Button symbol='8' click={add} />
          <Button symbol='9' click={add} />
          <Operation operation='*' color='rgb(139 77 255)' click={add} />
        </div>
        <div className='row'>
          <Button symbol='4' click={add} />
          <Button symbol='5' click={add} />
          <Button symbol='6' click={add} />
          <Operation operation='-' color='rgb(139 77 255)' click={add} />
        </div>
        <div className='row'>
          <Button symbol='1' click={add} />
          <Button symbol='2' click={add} />
          <Button symbol='3' click={add} />
          <Operation operation='+' color='rgb(139 77 255)' click={add} />
        </div>
        <div className='row'>
          <Button symbol='.' click={add} />
          <Button symbol='0' click={add} />
          <Button symbol='=' color='white' colorButton='black'  click={evaluate} />
        </div>
      </div>
    </div>
  );
}

export default App;
