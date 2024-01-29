import useTimer from "../hooks/useTimer";

const CountdownBar = ({ time, onFinish }) => {
  const  countdown = useTimer(time);

  if (countdown.isFinished) {
    setTimeout(onFinish, 1);
  }

  const percentage = (countdown.time / time) * 100;

  return(
    <div className="container-time">
      <style jsx>{`
        .container-time {
          width: 530px;
          height: 32px;
          margin-bottom: 8px;

          display: flex;
          justify-content: flex-start;
          background-color: #fff5;
          box-shadow: 0 0 24px #000;
          border-radius: 8px;
          overflow: hidden;
        }
        .time-bar {
          width: ${percentage}%;
          height: 100%;
          background: ${percentage >= 100
            ? "green"
            : percentage > 50
            ? "orange"
            : "red"};
          transition: width 1s linear, background 3s linear;
          border-radius: inherit;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
        }
        .time-bar p {
          // position: absolute;
          font-weight: bold;
          display: flex;
          justify-content: center;

          margin: 0 0;
          font-size: 24px;
          color: white;
          width: 100%;
          max-width: 48px !important;

          // box-shadow: -2px 0 20px #df1995, 2px 0 20px #6c006f;
        }
      `}</style>
      <div className="time-bar">
        <p>{countdown.timeleft}</p>
      </div>
    </div>
  )
}

export default CountdownBar;