import '../styles/Screen.css'

const Screen = ({ children }) => (
  <div className='screen'>
    { children.toString() }
  </div>
)

export default Screen;