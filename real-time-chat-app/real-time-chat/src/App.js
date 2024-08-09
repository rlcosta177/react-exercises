import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Message from './Message';

const socket = io('http://localhost:5001');

function App() {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    socket.on('message', (message) => {
      // whenever a new message is sent, create a new array based on the existing state(...messages) 
      // and add the newest message to the array
      setMessages([...messages, message]);
    });
  });

  // if messageText is empty, dont send
  const sendMessage = () => {
    if (!messageText) {
      console.log('no message was sent bruv')
    }
    else {
      socket.emit('sendMessage', { text: messageText });
      setMessageText('');
    }
  };

  return (
    <div className="App">
      <h1>Real-Time Chat App</h1>
      <div className="messages">
        {messages.map((message, index) => (
          <Message key={index} username={message.username} text={message.text} />
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;