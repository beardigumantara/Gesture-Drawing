import useTimer from "../hooks/useTimer";

const CountdownBar = ({ time, onFinish }) => {
  const  countdown = useTimer(time);

  if (countdown.isFinished) {
    setTimeout(onFinish, 1);
  }

  const percentage = (countdown.time / time) * 100;

  return(
    <div className="container-time">
      <div className="time-bar">
        <p>{countdown.timeleft}</p>
      </div>
    </div>
  )
}

export default CountdownBar;