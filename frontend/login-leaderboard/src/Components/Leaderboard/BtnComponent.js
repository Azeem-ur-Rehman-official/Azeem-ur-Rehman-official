import React from 'react';
import '../css/btn.css';
//leaderboard buttons
function BtnComponent(props) {
  return (
    <div>
      <button className="btn" data-aos="fade-up" onClick={props.rankBtn}>
        Rank
      </button>
      <button className="btn" data-aos="fade-up" onClick={props.pointsBtn}>
        Points
      </button>
      <button className="btn" data-aos="fade-up" onClick={props.nameBtn}>
        Name
      </button>
      <button className="btn" data-aos="fade-up" onClick={props.ageBtn}>
        Age
      </button>
    </div>
  );
}

export default BtnComponent;
