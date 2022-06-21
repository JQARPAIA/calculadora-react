import './styles/App.css';
import Calculadora from './components/Calculadora'

function App() {
  return (
    <div className='container'>
      <Calculadora />
      <div className='creator-link'>
        Created by 
        <a href='https://josearpaiaq.netlify.app/'>Jose Arpaia Q</a>
      </div>
    </div>
  );
}

export default App;
