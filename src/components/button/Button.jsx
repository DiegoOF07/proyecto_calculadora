import './Button.css'
export const Button = ({className, label, onClick}) => {
    return (
        <>
            <button className={`button ${className}`} onClick={onClick}>{label}</button>
        </>
    )
}