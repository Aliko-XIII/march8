const EndScreen = ({ points, total }) => {
    return <div className="endScreenWrapper">
        You've got:<br />
        {points}/{total}
    </div>
}

export default EndScreen;