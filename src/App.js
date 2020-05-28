//TODO: STEP 1 - Import the useState hook.
import React, { useState, } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setScore] = useState (0);
  const [awayScore, setScore1] = useState (0);
  const [quarter, setQuarter] = useState(1);

  if (quarter > 4) {
    setQuarter(1);
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
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
          <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarterData= {quarter} />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {() => setScore(homeScore + 7)}>Home Touchdown
          </button>
          <button className="homeButtons__fieldGoal" onClick = {() => setScore(homeScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {() => setScore1(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {() => setScore1(awayScore + 3)}>Away Field Goal</button>
        </div>
        <div> className="gameButtons"
          <button> className="gameButtons_changeQuarter" onClick = {() => setQuarter(quarter + 1)} >Change Quarter</button>
        </div>
      </section>
    </div>
  );
}

export default App;
