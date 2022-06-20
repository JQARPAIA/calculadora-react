import '../styles/Button.css'

function Button( { children, handleClick, isOperator, isClearButton } ) {
  return (
    <div 
      className={`button ${isOperator ? 'operator' : 'number'} ${isClearButton ? 'clear-button' : ''}`.trim()} 
      onClick={handleClick}
    >
      { children }
    </div>
  )
}

export default Button;