import './App.css';
import React,{useState} from 'react';
import HeaderComponent from './components/HeaderComponent';
import MessageDisplayComponent from './components/MessageDisplayComponent';
import MessageFormComponent from './components/MessageFormComponent';




function App() {

  const [currentMsg, setCurrentMsg] = useState([]);

  const youveGotMail = ( newMessage ) => {
    setCurrentMsg( currentMsg.concat(newMessage) );
}

  return (
    <div className="App">
      <HeaderComponent/>
      <MessageFormComponent youveGotMail={youveGotMail} />
      <MessageDisplayComponent message={currentMsg}/>

    </div>
  );
}

export default App;
