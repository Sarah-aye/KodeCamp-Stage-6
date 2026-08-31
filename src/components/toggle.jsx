import React, { useState } from "react";

const ToggleComponent = ({ render }) => {
  const [on, setOn] = useState(false);
  const toggle = () => {
    setOn((prevOn) => !prevOn);
  };

  return render(on, toggle);
};

export default ToggleComponent;
