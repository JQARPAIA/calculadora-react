import '../styles/Button.css'

function Button({ 
    children,
    handleClick,
    isOperator,
    isClearButton,
    isDeleteButton
  }) {
  return (
    <div 
      className={
        `button ${isOperator 
          ? 'operator' : 
          isDeleteButton ? 'delete-button' : 
          isClearButton ? 'clear-button' : 'number'}`.trim()
      } 
      onClick={handleClick}
    >
      { children }
    </div>
  )
}

export default Button;