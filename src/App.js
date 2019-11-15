//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Timer from "./Timer";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks. You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  
  const addHomeThree = event => {
    setHomeScore(homeScore + 3);
  };

  const addAwayThree = event => {
    setAwayScore(awayScore + 3);
  };

  const addHomeSeven = event => {
    setHomeScore(homeScore + 7);
  }

  const addAwaySeven = event => {
    setAwayScore(awayScore + 7);
  }


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer"><Timer/></div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={addHomeSeven} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={addHomeThree} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={addAwaySeven} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={addAwayThree} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;

