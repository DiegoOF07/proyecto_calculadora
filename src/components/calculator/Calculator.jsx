import { Display } from "../display/Display"
import { Keyboard } from "../keyboard/Keyboard"
import { useCalculator } from "../../hooks/useCalculator"
import './Calculator.css'

export const Calculator = () => {
    const { display, inputDigit, inputDot, clearAll, toggleSign, performOperation, calculateResult } = useCalculator()
    return (
        <div className="container">
            <div className="calculator">
                <div className="display-container">
                    <Display value={display} />
                </div>
                <Keyboard 
                    onDigit={inputDigit}
                    onDot={inputDot}
                    onClear={clearAll}
                    onOperation={performOperation}
                    onEquals={calculateResult}
                    onToggleSign={toggleSign} />
            </div>
        </div>
    )
}