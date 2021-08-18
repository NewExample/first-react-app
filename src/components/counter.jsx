import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const tags = ["tag1", "tag2", "tag3"];

  const formCount = () => {
    return count === 0 ? <h1>Ноль</h1> : count;
  };

  const getBadgetClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };
  const renderTags = () => {
    if (tags.length === 0) return "Тегов не найдено";
    return tags.map((tag) => {
      return <li key={tag}>{tag}</li>;
    });
  };
  const handleIncrement = (productId) => {
    if (productId.id === 2 && count > 0) {
      setCount(count - 1);
    } else if (productId.id === 1) {
      setCount(count + 1);
    }
  };
  return (
    <>
      {renderTags()}
      <span className={getBadgetClasses()}>{formCount()}</span>
      <button
        onClick={() => handleIncrement({ id: 1 })}
        className="button btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => handleIncrement({ id: 2 })}
        className="button btn-secondary btn-sm"
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
