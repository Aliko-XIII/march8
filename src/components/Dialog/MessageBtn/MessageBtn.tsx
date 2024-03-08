const MessageBtn = ({ fun, addClass }) => {
    return (<button className={`nextMsgBtn ${addClass}`}
        onClick={fun}>
        {addClass === 'leftBtn' ? '<---' : '--->'}
    </button>);
}

export default MessageBtn;