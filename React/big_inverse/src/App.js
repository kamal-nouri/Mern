import './App.css';
import BigInverse from './components/BigInverse';
function App() {
  return (
    <div className="App">
      <BigInverse firstName="Kamal" lastName="nouri" age={26} hairColor="black"/>
      <BigInverse firstName="Abd" lastName="qam" age={26} hairColor="brown"/>
      <BigInverse firstName="Alex" lastName="barg" age={26} hairColor="blonde"/>

    </div>
  );
}

export default App;
