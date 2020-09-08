import React, {useState}  from 'react';
import { Link } from 'react-router-dom';
import {Button, TextField, Grid, FlatButton } from '@material-ui/core';
import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

   

    

    return(
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>                
                <div className="space"><TextField   id="room_name" label="Name" variant="outlined"  onChange={(event)=> setName(event.target.value)} /></div>
                <div className="space"><TextField   id="room_id" label="Room" variant="outlined"  onChange= {(event)=> setRoom (event.target.value)} /> </div>
                
                <Button variant="contained" color="primary" onClick={event => (!name || !room) ? event.preventDefault(): null} component={Link} to={`/chat?name=${name}&room=${room}`}>Sign In</Button>
            </div>
        </div>
    )
}

export default Join;