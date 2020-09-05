import React from 'react';
import './Message.css';



const Message = ({message: {user, text}, name}) =>{

    let isSendByCurrentUser=false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName){
       isSendByCurrentUser=true;
    }

    return (
        isSendByCurrentUser
        ?(            
            <div className="responsiveRecived">
                <p className="admMsg">{text}</p>
                <div className="userMsg">
                    <p >{user}</p>
                </div>
            </div>
        )
        :
        (
            <div className="responsive">
                <p className="admMsg">{text}</p>
                <div className="userMsg">
                    <p >{user}</p>
                </div>
            </div>
        )
    );

}

export default Message;