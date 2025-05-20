import { Display } from "../display/Display"
import { Keyboard } from "../keyboard/Keyboard"
import './Calculator.css'
export const Calculator = () => {
    return (
        <div className="container">
            <div className="calculator">
                <div className="display-container">
                    <Display value={5}/>
                </div>
                <Keyboard />
            </div>
        </div>
    )
}