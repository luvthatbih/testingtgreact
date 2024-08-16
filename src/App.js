
import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  })

  const onConsole = () => {
    tg.close()
  }

  return (
    <div className="App">
        <button onClick={onConsole}>Закрыть</button>
    </div>
  );
}

export default App;
