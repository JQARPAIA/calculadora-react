import { useState } from 'react'
import '../styles/Calculadora.css'
import Button from './Button'
import Screen from './Screen'

/* eslint-disable */
function Calculadora() {
  const [input, setInput]= useState('')
  
  const isOperador = (val) => {
    return val === '-' || val === '+' || val === '*' || val === '/'
  }
  
  const updateScreen = (event) => {
    const lastInput = input[input.length - 1]
    const newInput = event.target.innerHTML
    if (!input && isOperador(newInput)) return
    if (input.toString().includes('+' || '-' || '*' || '/') && isOperador(newInput)) return
    if (isOperador(lastInput) && isOperador(newInput)) return
    setInput(input + newInput)
  }

  const deleteLastInput = () => {
    const inputArray = input.split('')
    const deleted = inputArray.pop()
    setInput(inputArray.join(''))
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
          handleClick={() => setInput('')}
          isClearButton={true}
        >
          CLEAR
        </Button>
        <Button
          handleClick={deleteLastInput}
          isClearButton={true}
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

export default Calculadora;