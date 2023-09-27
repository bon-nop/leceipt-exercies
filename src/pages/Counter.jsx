import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

function Counter() {
  // Initialize the count state as an object
  const [count, setCount] = useState({ type: "even", count: 0 });

  // Function to increment the count
  const handleIncrement = () => {
    const newCount = count.count + 1;
    const newType = newCount % 2 === 0 ? "even" : "odd";
    setCount({ type: newType, count: newCount });
  };

  // Function to decrement the count
  const handleDecrement = () => {
    const newCount = count.count - 1;
    const newType = newCount % 2 === 0 ? "even" : "odd";
    setCount({ type: newType, count: newCount });
  };

  return (
    <>
      <Card className="mt-3">
        <div>
          <h1>Count: {count.count}</h1>
          <p>Type: {count.type}</p>
          <Button onClick={handleIncrement} className="mx-2">
            Increment
          </Button>
          <Button onClick={handleDecrement} className="mx-2">
            Decrement
          </Button>
        </div>
      </Card>
    </>
  );
}

export default Counter;
