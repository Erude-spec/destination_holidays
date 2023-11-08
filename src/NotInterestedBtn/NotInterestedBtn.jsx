import React from "react";
import "./NotInterestedBtn.css"
const NotInterestedBtn = ({removeTour, id}) => {
  const handleButtonClick = () => {
    removeTour(id);
  };
  return <button className="notInterested" onClick={handleButtonClick}>Not Interested</button>;
};

export default NotInterestedBtn;
