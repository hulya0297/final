import { useState, useEffect } from "react";
import "./countdown.scss";

function Countdown() {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getTime() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours} : ${minutes} : ${seconds}`;
  }

  return (
    <div className="countdown">
      <span className="countdown-timer">{time}</span>
    </div>
  );
}

export default Countdown;
