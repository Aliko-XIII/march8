import { useContext, useState } from "react";
import Message from "./Message/Message";
import { MessageContext } from "../App";
import MessageBtn from "./MessageBtn/MessageBtn";

const Dialog = ({ messageId, msgGroupId, moveToPrev , moveToNext}) => {

    const { messageGroups } = useContext(MessageContext);



    return (
        <div className="dialog">

            <Message messageText={messageGroups[msgGroupId][messageId]} />
            <MessageBtn addClass={'leftBtn'} fun={moveToPrev} />
            <MessageBtn addClass={'rightBtn'} fun={moveToNext} />

        </div >
    );
}

export default Dialog;