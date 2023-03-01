import { useState } from "react";
import { Link } from "react-router-dom";
import { RoundButton } from "../buttons/RoundButton";
import { TitleComponent } from "../titles/HomeTitle";

const uuid = require("uuid");

export const GameJuanma = () => {
  const OPERATORS = [
    {
      operator: "X",
      apply: (number, operatorNumber) => {
        return number * operatorNumber;
      },
    },
    {
      operator: "%",
      apply: (number, operatorNumber) => {
        return number / operatorNumber;
      },
    },
    {
      operator: "-",
      apply: (number, operatorNumber) => {
        return number - operatorNumber;
      },
    },
    {
      operator: "+",
      apply: (number, operatorNumber) => {
        return parseInt(number) + parseInt(operatorNumber);
      },
    },
  ];

  const OPERATIONS = [
    { id: uuid.v4(), operator: OPERATORS[0], operatorNumber: 10 },
  ];

  const [number, setNumber] = useState(10);
  const [operations, setOperations] = useState(OPERATIONS);
  const [operator, setOperator] = useState(-1);
  const [operatorNumber, setOperatorNumber] = useState(0);

  const newOperationHandler = () => {
    if (operatorNumber < 1 || operator === -1) return;

    const operation = {
      id: uuid.v4(),
      operator: OPERATORS[operator],
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

  const deleteOperation = (id) => {
    const updatedOperations = operations.filter(
      (operation) => operation.id !== id
    );
    setOperations(updatedOperations);
  };

  return (
    <>
      <div>
        <TitleComponent />
        <br />
        <br />
        {OPERATORS.map((operator, index) => {
          return (
            <RoundButton
              key={index}
              value={index}
              addOperator={addOperator}
              label={operator.operator}
            />
          );
        })}
        <br />
        <br />
        <br />
        <div style={{ display: "flex" }}>
          <div className="add-operations" style={{ marginRight: "150px" }}>
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
          <h1>{number}</h1>
        </div>
        <br />
        <p>Lista</p>
        <ul>
          {operations.map((operation) => {
            return (
              <li key={operation.id}>
                {operation.operator.operator} {operation.operatorNumber} ||{" "}
                <button
                  onClick={() => {
                    setNumber(
                      operation.operator.apply(number, operation.operatorNumber)
                    );
                  }}
                >
                  APPLY
                </button>{" "}
                ||{" "}
                <button onClick={() => deleteOperation(operation.id)}>
                  DELETE
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
