import './App.css';

import MyNewComponent from './components/MyNewComponent';

function App() {
  return (
    <div className="App">
      <MyNewComponent firstName={"kamal"} lastName={"nouri"} age={26} hairColor={"black"}/>
      <MyNewComponent firstName={"alex"} lastName={"bargouthe"} age={31} hairColor={"blonde"}/>
      <MyNewComponent firstName={"abd"} lastName={"qamheye"} age={27} hairColor={"Brown"}/>
    </div>
  );
}

export default App;
