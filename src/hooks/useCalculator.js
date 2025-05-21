import { useState } from 'react'

export function useCalculator() {
  const [display, setDisplay] = useState('0')
  const [storedValue, setStoredValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputDigit = (digit) => {
    if (display.length >= 9) return
    
    if (waitingForOperand) {
      setDisplay(digit)
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? digit : display + digit)
    }
  }

  const toggleSign = () => {
    if (display === '0') return
    
    if (display.charAt(0) === '-') {
      if (display.length - 1 <= 9) {
        setDisplay(display.substr(1))
      }
    } else {
      if (display.length + 1 <= 9) {
        setDisplay('-' + display)
      }
    }
  }

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplay('.')
      setWaitingForOperand(false)
      return
    }
    
    if (!display.includes('.')) {
      if (display.length < 9) {
        setDisplay(display + '.')
      }
    }
  }

  const clearAll = () => {
    setDisplay('0')
    setStoredValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display)
    
    if (storedValue === null) {
      setStoredValue(inputValue)
    } else if (operation) {
      const result = calculate(storedValue, inputValue, operation)
      
      if (result < 0 || result > 999999999 || isNaN(result) || !isFinite(result)) {
        setDisplay('ERROR')
      } else {
        const formattedResult = formatResult(result)
        setDisplay(formattedResult)
        setStoredValue(result)
      }
    }
    
    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = (firstOperand, secondOperand, operation) => {
    switch(operation) {
      case '+': return firstOperand + secondOperand
      case '-': return firstOperand - secondOperand
      case '×': return firstOperand * secondOperand
      case '÷': return secondOperand === 0 ? NaN : firstOperand / secondOperand
      case '%': return firstOperand % secondOperand
      default: return secondOperand
    }
  }

  const formatResult = (result) => {
    let resultStr = String(result)
    
    if (resultStr.includes('.')) {
      const [ integer ] = resultStr.split('.')
      const maxDecimalLength = 9 - integer.length - 1
      
      if (maxDecimalLength > 0) {
        resultStr = parseFloat(result).toFixed(maxDecimalLength)
      } else {
        resultStr = integer
      }
    }
    
    return resultStr.length > 9 ? resultStr.substring(0, 9) : resultStr
  }

  return {
    display,
    inputDigit,
    inputDot,
    clearAll,
    toggleSign,
    performOperation,
    calculateResult: () => performOperation(null)
  }
}