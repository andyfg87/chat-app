import React, {useState, useEffect} from 'react';
import queryString from 'querystring'; 
import io from 'socket.io-client';
import './Chat.css';

import '../InfoBar/InfoBar';
import '../Input/Input';

import { AppBar, Toolbar, IconButton, Typography, Button, Container, Grid, Paper, TextField } from '@material-ui/core';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket;

const Chat = ( { location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPONT = 'localhost:5000';

    useEffect(() =>{
        const { name, room} = queryString.parse(location.search.slice(1));
        
        socket = io(ENDPONT);        

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, ()=>{

        });
        
        return () =>{
            socket.emit('disconnect');

            socket.off();
            
        }

    },[ENDPONT, location.search]);

    useEffect(() =>{
        socket.on('message', (message) =>{
          setMessages([...messages, message])
        });
    },[messages]);

    //function for sending message
    const sendMessage = (event) => {
        event.preventDefault();
        if(message){
          socket.emit('sendMessage', message, () => setMessage(''));
        }
    }
 
    console.log(message, messages);
    return(
        
        <div>
            <InfoBar room={room}/>
            <Container maxWidth="sm" maxHeight="sm">
                <Typography  component="div" style={{ backgroundColor: 'black', height: '64vh', width: '100vh' }}>
                   <Messages messages = {messages} name={name}/>  
                </Typography >
               
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}  />
            
            </Container>
            
            
        </div>    

    )
}

export default Chat;