import React from "react";

const Button = React.memo(({increment}) => {
    console.log('Render button child');
    
  return (
    <div>
      <h5>Button Component</h5>
      <button onClick={increment}>Increment</button>
    </div>
  );
});

export default Button;
