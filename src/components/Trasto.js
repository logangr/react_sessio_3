import React, { useState } from "react";
const Trasto = () => {
  const [change, setChange] = useState(true);
  return (
    <div>
      <button onClick={() => setChange(!change)}>Click Here!</button>
      {change ? (
        <h1>Welcome to React4teachers</h1>
      ) : (
        <h1>From zero to hero!</h1>
      )}
    </div>
  );
}

export default Trasto;
