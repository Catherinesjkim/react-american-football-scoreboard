import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0); // seconds will store the value of our timer. Start the seconds off at 0.
  const [isActive, setIsActive] = useState(false); // isActive will store the timer's state for whether it's currently timing or paused. The time is in paused state (isActive set to false).

  function toggle() { // This is makes my timer functional. New function added to the body of my functional component called toggle. 
    setIsActive(!isActive); // When the togle function is called, it will change the value of isActive to be the opposite of what it currently is. (isActive set to true, in active state).
  } // This may look strange but it's the cleanest and simplest way of writing a function. Rather than writing 2 separate functions named start and pause, I've combined them into 1 function called toggle. 

  function reset() { // Separate function to reset the timer
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => { // Used setInterval method to start the timer. Rather than starting the setInterval timer in the toggle function, I used the useEffect React Hook to detect when isActive is true and start the timer inside of that function. 
    let interval = null; // Initialized a new variable interval to null. 
    if(isActive) { // Then, we detect if isActive is true
      interval = setInterval(() => { // If it's true, then I assign the previously created interval variable
        setSeconds(seconds => seconds + 1); //Inside interval is where it increments the seconds value by one
      }, 1000); // to a new interval that triggers every 1,000 milliseconds. 
    } else if (!isActive && seconds !== 0) { //If isActive value is false, then clearing out the interval. 
      clearInterval(interval); // Also returning clearInterval out of the useEffect method to cleanup after.
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return ( // bring in my new stateful values into the HTML to change the UI based on the current state: Hooked up those 2 functions with 2 buttons onClick handlers: 
    <div className="app">
      <div className="time">{seconds}s</div>
      <div className="row"> 
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>{isActive ? 'Pause' : 'Start'}</button>
        <button className="button" onClick={reset}>Reset</button>
      </div>
    </div>
    );
};

export default Timer;