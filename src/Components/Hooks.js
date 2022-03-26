import React, { useState } from 'react';

function Hooks() {
  
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(false);

  return (
    <div className="Hooks">
        <div className="Hook">
          <h3>Hooks</h3>
      <p>You clicked {count} times</p>
      <p onMouseOver={() => setHover(hover + 10)}>You Hover {hover} times </p>
      <button onClick={() => setCount(count + 10)} >
      Click me
      </button>
      </div>
    </div>
  );
}
export default Hooks;