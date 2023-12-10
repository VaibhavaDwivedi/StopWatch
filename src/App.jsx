import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isStart) {
      intervalId = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isStart, time]);

  const handleClear = () => {
    setTime(0);
  };

  const handleStartStop = () => {
    setIsStart(!isStart);
  };

  let seconds = Math.floor(time % 60);
  let minutes = Math.floor((time / 60) % 60);

  let formattedSecond = ("0" + seconds).slice(-2);
  let formattedMinute = ("0" + minutes).slice(-2);

  return (
    <>
      <div className="timer">
        {formattedMinute}m:{formattedSecond}s
      </div>
      <div>
        {!isStart ? (
          <button onClick={handleStartStop} className="start-button">
            START
          </button>
        ) : (
          <button onClick={handleStartStop} className="stop-button">
            STOP
          </button>
        )}
        {!isStart && (
          <button className="clear-button" onClick={handleClear}>
            CLEAR
          </button>
        )}
      </div>
    </>
  );
}

export default App;
