import React from "react";
import "./../index.css";

const Counter = (props) => {
  const formValue = () => {
    return props.value === 0 ? <h1>Ноль</h1> : props.value;
  };

  const getBadgetClasses = () => {
    let classes = "badge m-2 bg-";
    classes += props.value === 0 ? "danger" : "primary";
    return classes;
  };
  return (
    <div>
      <h4>{props.name}</h4>
      <span className={getBadgetClasses()}>{formValue()}</span>
      <button
        onClick={() => props.onIncrement(props.id)}
        className="button btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => props.onDecrement(props.id)}
        className="button btn-secondary btn-sm"
      >
        Decrement
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
