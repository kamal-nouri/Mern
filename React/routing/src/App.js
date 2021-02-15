import './App.css';
import { Router,navigate } from '@reach/router';
import Home from './components/home';
import Number from './components/Number';
import All from './components/All';



function App() {
  const clickHandler=(e)=>{
    e.preventDefault();
    navigate('/home')
  }
  return (
    <div className="App">
      <button onClick={clickHandler}>Home</button>
      <Router>
        <Home path='/home' />
        <Number path="/:no" />
        <All path="/:w/:c/:b"/>
      </Router>
    </div>
  );
}

export default App;
