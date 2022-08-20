import React, { useState, useEffect, ChangeEvent} from 'react'
import { Container, Calculator } from "./styles";

export function DayFour() {
  const[ firstNumber, setFirstNumber ] = useState<any>(0)
  const[ secondNumber, setSecondNumber ] = useState<any>(0)
  const[ result, setResult ] = useState<any>(0)
  const[ operation, setOperation ] = useState<any>('Sum')

  function calculate() {
    if(operation === 'Sum') {
      return (
        parseFloat(firstNumber) + parseFloat(secondNumber)
      )
    } else if(operation === 'Subtract'){
      return (
        parseFloat(firstNumber) - parseFloat(secondNumber)
      )
    }else if(operation === 'Multiply'){
      return (
        parseFloat(firstNumber) * parseFloat(secondNumber)
      )
    } else if(operation === 'Divide') {
      return (
        parseFloat(firstNumber) / parseFloat(secondNumber)
      )
    }
  }

  useEffect(() => {
    return setResult(calculate());
  }, [firstNumber, secondNumber, operation])

  return (
    <Container>
      <Calculator>
        <h1>Calculator React</h1>
        <label>First Number</label>
        <input 
          type="number" 
          value={firstNumber}
          onChange={(event: any) =>
            setFirstNumber(event.target.value)
          }
        />
        <label>Second Number</label>
        <input 
          type="number" 
          value={secondNumber}
          onChange={(event: any) =>
            setSecondNumber(event.target.value)
          }
        />

        <select 
          onChange={(event: any) =>
            setOperation(event.target.value)
          }
        >
          <option>Sum</option>
          <option>Subtract</option>
          <option>Multiply</option>
          <option>Divide</option>
        </select>
        <div>
          <label className="result">{result}</label>
        </div>
      </Calculator>
    </Container>
  )
}