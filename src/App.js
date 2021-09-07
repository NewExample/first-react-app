import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";
const App = () => {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 4, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Чайник" },
    { value: 0, id: 5, name: "Кастрюля" },
    { value: 0, id: 6, name: "Сковородка" },
    { value: 0, id: 7, name: "Лопатка" },
  ];
  const [counters, setCounters] = useState([
    { value: 0, id: 1, name: "Ложка" },
    { value: 0, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Чайник" },
    { value: 0, id: 5, name: "Кастрюля" },
    { value: 0, id: 6, name: "Сковородка" },
    { value: 0, id: 7, name: "Лопатка" },
  ]);
  const handleDelete = (counterId) => {
    const newCounters = counters.filter((counter) => counter.id !== counterId);
    setCounters(newCounters);
  };
  const handleIncrement = (counterId) => {
    let c = [...counters];
    c[counterId - 1].value += 1;
    setCounters(c);
  };
  const handleDecrement = (counterId) => {
    let c = [...counters];
    if (c[counterId - 1].value > 0) {
      c[counterId - 1].value -= 1;
    }
    setCounters(c);
  };
  const handleReset = () => setCounters(initialState);
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          onDelete={handleDelete}
          counters={counters}
        />
      </main>
    </div>
  );
};

export default App;
