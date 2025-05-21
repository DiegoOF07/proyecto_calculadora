import './Display.css'
export const Display = ({ value }) => {
    return (
        <>
            <input className="display" type="text" readOnly={true} value={value} />
        </>
    )
}