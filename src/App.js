import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['a', 'b', 'c']);
  const [username, setUsername] = useState('');

  useEffect(() => {
    prompt('Please enter your name')
  },[])

  const sendMessage = (event) => {
    //all logic to send message
    event.preventDefault();
    setMessages([...messages , input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Guru</h1>
      <form>
        <FormControl>
          <InputLabel>Enter a message</InputLabel>
          <Input value={input} onChange={(event) => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send messages</Button>
        </FormControl>
      </form>
      {
          messages.map(message => (
            <Message text={message}/>
          ))
        }
    </div>
  );
}

export default App;
