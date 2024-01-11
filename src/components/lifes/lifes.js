import React from "react";

const Lifes = (props) => {
  const items = [];
  for (let i = 0; i < props.lifes; i++) {
    items.push(<img key={i} src={require("../../assets/img/life.png")} />);
  }

  return <div className="lifes" style={{textAlign: 'right'}}>{items}</div>;
};

export default Lifes;
