import './App.css';
import Luke from './components/Luke';
import { Router } from '@reach/router';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Router>
      <Luke path='/' />
      <Home path='/:i/:id' />
      </Router>
    </div>
  );
}

export default App;
