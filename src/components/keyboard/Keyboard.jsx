import { Button } from "../button/Button"
import './Keyboard.css'
export const Keyboard = ({ onDigit, onDot, onClear, onOperation, onEquals }) => {
    return (
        <div className="keyboard">
            <Button className="clear" label="C" onClick={onClear} />
            <Button className="operation" label="%" onClick={() => onOperation('%')} />
            <Button className="operation" label="÷" onClick={() => onOperation('÷')} />
            <Button className="operation" label="×" onClick={() => onOperation('×')} />
            <Button className="number" label="7" onClick={() => onDigit('7')} />
            <Button className="number" label="8" onClick={() => onDigit('8')} />
            <Button className="number" label="9" onClick={() => onDigit('9')} />
            <Button className="operation" label="-" onClick={() => onOperation('-')} />
            <Button className="number" label="4" onClick={() => onDigit('4')} />
            <Button className="number" label="5" onClick={() => onDigit('5')} />
            <Button className="number" label="6" onClick={() => onDigit('6')} />
            <Button className="operation sum" label="+" onClick={() => onOperation('+')} />
            <Button className="number" label="1" onClick={() => onDigit('1')} />
            <Button className="number" label="2" onClick={() => onDigit('2')} />
            <Button className="number" label="3" onClick={() => onDigit('3')} />
            <Button className="number" label="0" onClick={() => onDigit('0')} />
            <Button className="operation" label="." onClick={onDot} />
            <Button className="equals" label="=" onClick={onEquals} />
        </div>
    )
}