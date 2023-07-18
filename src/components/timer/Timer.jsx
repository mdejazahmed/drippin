import { useState } from "react";
import "./timer.scss";
import { useEffect } from "react";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const deadLine = "july 20 2023";

  const getTime=()=>{
    const remainTimeInMiliSec=Date.parse(deadLine) - Date.now()
    setHours(Math.floor(remainTimeInMiliSec/(1000*60*60)))
    setMins(Math.floor(remainTimeInMiliSec/(1000*60)%60))
    setSecs(Math.floor(remainTimeInMiliSec/(1000)%60))
  }

  useEffect(() => {
    const intervelId=setInterval(()=>getTime(),1000)
    return ()=>clearInterval(intervelId)
  },[]);

  return (
    <div className="timer">
      <div className="timerWrapper">
        <span>{hours>9?hours:"0"+hours}</span>:
        <span>{mins>9?mins:"0"+mins}</span>:
        <span>{secs>9?secs:"0"+secs}</span>
      </div>
      <p className="timerPara">time reamaining Hurry up!</p>
    </div>
  );
};

export default Timer;
