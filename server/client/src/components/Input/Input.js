import React from 'react';
import './Input.css';
import { TextField, Button } from '@material-ui/core';


const Input = ({message, setMessage, sendMessage}) =>(
    <div class="dp">
            <TextField id="standard-basic" label="Message" value={message} 
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={event => event.key ==='Enter'?sendMessage(event): null}
                    fullWidth
                    />
                <Button variant="contained" color="primary" onClick={(event) => {sendMessage(event)}}>Send</Button>
    </div>
    
   

)

export default Input;