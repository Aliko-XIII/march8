import { useContext, useState } from "react";
import { AnswerContext } from "../App";
import AnswerOption from "./AnswerOption/AnswerOption";

const Answers = ({ addPoint, updateAnswered, answered, ansGroupId }) => {
    const { answerGroups } = useContext(AnswerContext);

    const options = answerGroups[ansGroupId].options;
    const correctId = answerGroups[ansGroupId].correctId;

    function handleAnswer(id) {
        updateAnswered(id, ansGroupId);
        if (correctId === id) { addPoint(); };
    }

    return <div className="answersWrapper">
        {options.map((val, index) => {
            return <AnswerOption num={index} value={val} key={val}
                handleAnswer={() => { handleAnswer(index) }} disabled={answered[ansGroupId].isAnswered}
                mark={answered[ansGroupId].answeredId === index ?
                    (index == correctId ? 'right' : 'wrong') : ''} />;
        })}
    </div>;
}

export default Answers;