import { useState, useEffect } from 'react';
import './countdown.scss'; 

function Countdown() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(countdownInterval);
      } else {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            if (hours > 0) {
              setHours(hours - 1);
              setMinutes(59);
              setSeconds(59);
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [hours, minutes, seconds]);

  return (
    <div className="countdown">
        <div className='countdown_item'>
        <span className='countdown_item_count'>{`${hours.toString().padStart(1, '0')} `}</span>
   <p className='countdown_item_time'>Hours</p>
        </div>
        <div className='countdown_dot'>:</div>
      
     <div className='countdown_item'>
     <span className='countdown_item_count'>{`${minutes.toString().padStart(1, '0')} `}</span>
   <p className='countdown_item_time'>Minutes</p>

     </div>
     <div className='countdown_dot'>:</div>
     <div className='countdown_item'>
     <span className='countdown_item_count'>{`${seconds.toString().padStart(1, '0')} `}</span>
   <p className='countdown_item_time'>Seconds</p>
     </div>
    
  
    </div>
  );
}

export default Countdown;