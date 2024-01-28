import { useState, useEffect } from 'react';

const useTimer = (startAt) => {
 const [timeleft , setTimeleft] = useState(startAt);
 const isFinished = timeleft === 0;

 useEffect(() => {
  if (!isFinished) {
   const timerId = setTimeout(() => {
    setTimeleft(timeleft - 1);
   }, 1000);
   return () => clearTimeout(timerId);
  }
 }, [timeleft, isFinished]);

 return {
  startAt,
  timeleft,
  isFinished,
 }
}
export default useTimer;