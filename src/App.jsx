import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import Button from './components/Button';
import { useState } from 'react';
import { useInsertionEffect } from 'react';
import {useEffect} from 'react';

function App() {
  const [userName, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  // const onClick1 = function() {
  //   //content second format
  // }

  useEffect(() => {
    //setUsername('')
    setDisplayName('Sample Name')
  }, []);

  useEffect(() => {
    //setUsername('')
    if(userName) {
      setDisplayName(userName);
    }
  }, [userName]);
  const onChange = (value) => {
    setUsername(value);
  }
  const onClick = () => {
    const val = prompt('Enter your name');
    setUsername(val);
    //console.log(val);
  };
  return (
    <div className="App">
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <InputField label ='User Name' onChange={onChange}/>
      {/* <InputField label ='Password'/>

      <Button label='Login' handleClick={()=>{}}/> */}

      {displayName && <h1>Hello{displayName}</h1>}

      
    </div>
  );
}

export default App;
