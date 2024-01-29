import useTimer from "../hooks/useTimer";

const ReadyTimer = ({ time, onFinish }) => {
  const countdown = useTimer(time);

  if (countdown.isFinished) {
    // Execute on finish callback on 1ms delay
    // to avoid setTimer error
    setTimeout(onFinish, 1);
  }
  return (
    <div className="timer-ready">
      <style jsx>{`
        .timer-ready {
          color: black;
          display: flex;
          flex-direction: column;
        }
        .timer-ready p {
          font-size: 24px;
          margin : 0;
          font-weight: bold;
        }
      `}</style>
      <p>Get Ready</p>
      <p>{countdown.timeLeft}</p>
    </div>
  );
}
export default ReadyTimer;