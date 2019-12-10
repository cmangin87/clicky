import React from 'react';

const Jumbotron = props => {
  return (
    <div
      className={`
      jumbotron jumbotron-fluid p-2 text-center ${
        props.dark ? 'bg-dark text-light' : 'bg-light text-dark'
      } `}>
      {/* <span className="m-3 jumboTitle" style={{ fontSize: 25 }}></span> */}
      <span className="m-3 jumboTitle" style={{ fontSize: 25 }}></span>
      Current Score: {props.score}<br></br>High Score: {props.highScore}
    </div>
  );
};

export default Jumbotron;