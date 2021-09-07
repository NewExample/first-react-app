import React, { useState } from "react";
import Counter from "./counter";
import "./../index.css";
const Counters = (props) => {
  return (
    <>
      <button onClick={props.onReset} className="btn btn-primary btn-sm m-2">
        Сброс
      </button>
      {props.counters.map((counter) => (
        <Counter
          key={counter.id}
          {...counter}
          onDelete={props.onDelete}
          onDecrement={props.onDecrement}
          onIncrement={props.onIncrement}
        />
      ))}
    </>
  );
};

export default Counters;
