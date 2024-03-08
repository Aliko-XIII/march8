import { createContext, useContext, useState } from 'react';
import data from '../data';
import Dialog from './Dialog/Dialog';
import Answers from './Answers/Answers';
import EndScreen from './EndScreen/EndScreen';


export const MessageContext = createContext({
    messageGroups: [
        ...data.testDialog,
    ],
});

export const AnswerContext = createContext({
    answerGroups: [
        ...data.testAnswer,],
});


const App = () => {

    const [answersActivated, setAnswersActivated] = useState(false);
    const [points, setPoints] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [answered, setAnswered] = useState(data.testAnswer.map(() => { return { isAnswered: false, answeredId: -1 } }));
    const [messageId, setMessageId] = useState(0);
    const [msgGroupId, setMsgGroupId] = useState(0);
    const { messageGroups } = useContext(MessageContext);
    const [ansGroupId, setAnsGroupId] = useState(0);



    function updateAnswered(ansId, groupId) {
        const newAnswered = [...answered];
        newAnswered[groupId].answeredId = ansId;
        newAnswered[groupId].isAnswered = true;
        setAnswered(newAnswered);
    }

    function addPoint() {
        setPoints(points + 1);
    }

    function moveToNext() {
        if (messageId === messageGroups[msgGroupId].length - 1 &&
            msgGroupId === messageGroups.length - 1) {
            setIsFinished(true);
            return;
        }
        if (messageId < messageGroups[msgGroupId].length - 1) {
            setMessageId(messageId + 1);
            if (messageId + 1 === messageGroups[msgGroupId].length - 1) {
                setAnswersActivated(true);
            }
        }
        else if (msgGroupId < messageGroups.length - 1) {
            setMsgGroupId(msgGroupId + 1);
            setMessageId(0);
            setAnswersActivated(false);
            setAnsGroupId(ansGroupId + 1);
        }
    }

    function moveToPrev() {
        if (messageId === 0 &&
            msgGroupId === 0) {
            return;
        }
        if (messageId > 0) {
            setMessageId(messageId - 1);
            if (messageId - 1 !== 0) {
                setAnswersActivated(false);
            }
        }
        else if (msgGroupId > 0) {
            setMsgGroupId(msgGroupId - 1);
            setMessageId(messageGroups[msgGroupId].length - 1);
            setAnswersActivated(true);
            setAnsGroupId(ansGroupId - 1);
        }
    }


    return (
        <div className="appWrapper">
            <div className="content">
                {
                    !isFinished ?
                        <>
                            <Dialog messageId={messageId} msgGroupId={msgGroupId}
                                moveToPrev={moveToPrev} moveToNext={moveToNext} />
                            {answersActivated &&
                                <Answers addPoint={addPoint} updateAnswered={updateAnswered} answered={answered}
                                    ansGroupId={ansGroupId} />}
                        </>
                        : <EndScreen points={points} total={data.testAnswer.length} />
                }
            </div>
        </div>
    );
}


export default App;