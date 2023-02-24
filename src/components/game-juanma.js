import { useState } from "react";
import { TitleComponent } from "./titleComponent";

const uuid = require("uuid");
const OPERATIONS = [{ id: uuid.v4(), operator: "X", operatorNumber: 10 }];

export const GameJuanma = () => {
  const [number, setNumber] = useState(10);
  const [operations, setOperations] = useState(OPERATIONS);
  const [operator, setOperator] = useState("");
  const [operatorNumber, setOperatorNumber] = useState(0);

  const newOperationHandler = () => {
    if (operatorNumber < 1 || operator === "") return;

    const operation = {
      id: uuid.v4(),
      operator: operator,
      operatorNumber: operatorNumber,
    };

    setOperations((prevOperations) => {
      return [...prevOperations, operation];
    });
  };

  const addOperator = (event) => {
    setOperator(event.target.value);
  };

  const changeOperatorNumber = (event) => {
    setOperatorNumber(event.target.value);
  };

  const applyOperation = (operation) => {
    const operator = operation.operator;

    if (operator === "X") {
      setNumber(number * operation.operatorNumber);
    }
    if (operator === "%") {
      setNumber(number / operation.operatorNumber);
    }
    if (operator === "-") {
      setNumber(number - operation.operatorNumber);
    }
    if (operator === "+") {
      setNumber(parseInt(number) + parseInt(operation.operatorNumber));
    }
  };

  const deleteOperation = (id) => {
    const updatedOperations = operations.filter(
      (operation) => operation.id !== id
    );
    setOperations(updatedOperations);
  };

  return (
    <div>
      <TitleComponent />
      <br />
      <br />
      <button className="round-button" value="X" onClick={addOperator}>
        X
      </button>
      <button className="round-button" value="%" onClick={addOperator}>
        %
      </button>
      <button className="round-button" value="-" onClick={addOperator}>
        -
      </button>
      <button className="round-button" value="+" onClick={addOperator}>
        +
      </button>
      <br />
      <br />
      <br />
      <h1>{number}</h1>
      <div className="add-operations">
        <input
          type="number"
          style={{ width: "180px", height: "40px" }}
          onChange={changeOperatorNumber}
        />
        <br />
        <button
          style={{ width: "189px", height: "40px" }}
          onClick={newOperationHandler}
        >
          ADD
        </button>
      </div>
      <br />
      <br />
      <p>Lista</p>
      <ul>
        {operations.map((operation) => {
          return (
            <li key={operation.id}>
              {operation.operator} {operation.operatorNumber} ||{" "}
              <button onClick={() => applyOperation(operation)}>APPLY</button>{" "}
              ||{" "}
              <button onClick={() => deleteOperation(operation.id)}>
                DELETE
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
