export const RoundButton = (props) => {
  return (
    <button
      className="round-button"
      value={props.value}
      onClick={props.addOperator}
    >
      {props.label}
    </button>
  );
};
