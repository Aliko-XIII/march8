
const AnswerOption = ({ num, value, handleAnswer, disabled, mark }) => {
    return <button
        className={`option ans${num} ${mark}`}
        onClick={handleAnswer}
        disabled={disabled}
    >
        {value}
    </button >
}
export default AnswerOption;