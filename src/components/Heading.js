import React from "react";

function Heading() {
  const date = new Date();
  const currentTime = date.getHours();

  let greeting;

  const customStyle = {
    color: "",
  };

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "#805AD5";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "#553C9A";
  } else {
    greeting = "Good Night";
    customStyle.color = "#9F7AEA";
  }

  return (
    <div>
      <h1 className="heading" style={customStyle}>
        {greeting}
      </h1>
    </div>
  );
}

export default Heading;
