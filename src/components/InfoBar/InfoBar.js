import React from 'react';
import {AppBar, Toolbar, IconButton, Typography} from  '@material-ui/core';



import './InfoBar.css';

const InfoBar = ({room}) =>(
    
    <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start"  color="inherit" aria-label="menu">
                    
                    </IconButton>
                    <Typography variant="h6">
                    Chat Room: {room}
                    </Typography>    
                </Toolbar>
            </AppBar>    
)

export default InfoBar;