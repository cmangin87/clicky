import React from 'react';

const Jumbtron = props => {
  return (
    <div
      className={`
      jumbotron jumbotron-fluid p-2 text-center ${
        props.dark ? 'bg-dark text-light' : 'bg-light text-dark'
      } `}>
      {/* TAKE STYLE OUT JUST TO MAKE A POINT */}
      <span className="m-3" style={{ fontSize: 30 }}>
        Score: {props.score}
      </span>
      <span className="m-3" style={{ fontSize: 30 }}>
        High Score: {props.highScore}
      </span>
    </div>
  );
};

export default Jumbtron;
