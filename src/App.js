import './App.css';
import OneImage from './risbg.jpg'
import { Work } from './spisok.js'

function App() {
  return (
    <div className='App'>
      <img src={ OneImage } alt='foto1' width='300px' />
      <h1>СПИСОК ДЕЛ</h1>
      <Work/>
    </div>
  );
}

export default App;
