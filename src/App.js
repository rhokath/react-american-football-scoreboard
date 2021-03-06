//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

const App= (props) => {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [clickScoreHome, setClickScoreHome] = useState(0);
  const [clickScoreAway, setClickScoreAway] = useState(0);
  const [nextQuarter, setNextQuarter] = useState(1);
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{clickScoreHome}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{clickScoreAway}</div>
          </div>
        </div>
        <BottomRow nextQuarter={nextQuarter}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = { () => setClickScoreHome(clickScoreHome + 7)}className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {() => setClickScoreHome(clickScoreHome +3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {() => setClickScoreAway(clickScoreAway + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {() => setClickScoreAway(clickScoreAway + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        <div>
          <button onClick = {() => setNextQuarter(nextQuarter < 4 ? nextQuarter +1: nextQuarter = 1) }>{nextQuarter}</button>
        </div>
      </section>
    </div>
  );
}

export default App;
