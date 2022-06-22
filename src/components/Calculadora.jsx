import { useState } from 'react'
import '../styles/Calculadora.css'
import Button from './Button'
import Screen from './Screen'

function Calculator() {
  const [input, setInput]= useState('0')
  
  const isOperator = (val) => {
    return val === '-' || val === '+' || val === '*' || val === '/'
  }
  
  const updateScreen = (event) => {
    const lastInput = input[input.length - 1] ?? ''
    const newInput = event.target.innerHTML

    const containsOperator = input.toString().split('').find(val => val === '+' || val === '-' || val === '*' || val === '/')
    const lastInputIsOperator = isOperator(lastInput)
    const newInputIsOperator = isOperator(newInput)

    if (input === '0') return setInput(newInput)
    if (isOperator(newInput) && input === '') return
    if (newInputIsOperator && containsOperator) return
    if (lastInputIsOperator && newInputIsOperator) return

    setInput(input + newInput)
  }

  const deleteLastInput = () => {
    const inputArray = input.toString().split('')
    inputArray.pop()
    setInput(inputArray.join(''))
    console.log(input)
    console.log(typeof input)
  }

  const calculateResult = () => {
    if (!input) return
    const arrayInput = input.split('')
    const operator = arrayInput.find(val => val === '+' || val === '-' || val === '*' || val === '/')
    const values = input.split(operator)
    if (operator === '+') return setInput(Number(values[0]) + Number(values[1]))
    if (operator === '-') return setInput(Number(values[0]) - Number(values[1]))
    if (operator === '*') return setInput(Number(values[0]) * Number(values[1]))
    if (operator === '/') return setInput(Number(values[0]) / Number(values[1]))
  }

  return (
    <div className="calculator">
      <Screen>
        {input}
      </Screen>
      <div className="row">
        <Button
          handleClick={() => setInput('0')}
          isClearButton={true}
        >
          CLEAR
        </Button>
        <Button
          handleClick={deleteLastInput}
          isDeleteButton={true}
        >
          ⬅ 
        </Button>
      </div>
      <div className="row">
      <Button
          handleClick={updateScreen}
        >
          7
        </Button>
        <Button
          handleClick={updateScreen}
        >
          8
        </Button>
        <Button
          handleClick={updateScreen}
        >
          9
        </Button>
        <Button
          handleClick={updateScreen}
          isOperator={true}
        >
          *
        </Button>
      </div>
      <div className="row">
      <Button
          handleClick={updateScreen}
        >
          4
        </Button>
        <Button
          handleClick={updateScreen}
        >
          5
        </Button>
        <Button
          handleClick={updateScreen}
        >
          6
        </Button>
        <Button
          handleClick={updateScreen}
          isOperator={true}
          >
          -
        </Button>
      </div>
      <div className="row">
        <Button
          handleClick={updateScreen}
        >
          1
        </Button>
        <Button
          handleClick={updateScreen}
        >
          2
        </Button>
        <Button
          handleClick={updateScreen}
        >
          3
        </Button>
        <Button
          handleClick={updateScreen}
          isOperator={true}
          >
          +
        </Button>
      </div>
      <div className="row">
      <Button
          handleClick={updateScreen}
        >
          0
        </Button>
        <Button
          handleClick={updateScreen}
        >
          .
        </Button>
        <Button
          handleClick={calculateResult}
          isOperator={true}
          >
          =
        </Button>
        <Button
          handleClick={updateScreen}
          isOperator={true}
        >
          /
        </Button>
      </div>
    </div>
  )
}

export default Calculator;