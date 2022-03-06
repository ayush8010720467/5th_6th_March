import './App.css';
import Count from './count';
import Button from './Button'
import {useState} from 'react';

function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  return (
    <>
    <Button sign='Plus' callback={()=>{setCounterValue(counterValue+1)}}></Button>
    <Count number={counterValue}></Count>
    <Button sign='Minus' callback={()=>{setCounterValue(counterValue-1)}}></Button>
    </>
  );
}

export default Counter;
