import './styles/App.css';
import Calculator from './components/Calculadora'

function App() {
  return (
    <div className='container'>
      <Calculator />
      <div className='creator-link'>
        Created by 
        <a href='https://josearpaiaq.netlify.app/'>Jose Arpaia Q</a>
      </div>
    </div>
  );
}

export default App;
