import React, { useState, useEffect, useRef, useCallback } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive && !isPaused) {
      intervalRef.current = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);

      // Clean up the interval on component unmount or when `isActive` or `isPaused` changes
      return () => clearInterval(intervalRef.current);
    } else {
      clearInterval(intervalRef.current);
    }
  }, [isActive, isPaused]);

  const startTimer = useCallback(() => {
    setIsActive(true);
    setIsPaused(false);
  }, []);

  const pauseTimer = useCallback(() => {
    setIsPaused(true);
  }, []);

  const resetTimer = useCallback(() => {
    setIsActive(false);
    setIsPaused(false);
    setSeconds(0);
  }, []);

  return (
    <div>
      <h1>Timer</h1>
      <p>{Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, '0')}</p>
      <button onClick={startTimer} disabled={isActive && !isPaused}>Start</button>
      <button onClick={pauseTimer} disabled={!isActive || isPaused}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
