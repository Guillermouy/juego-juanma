export const Input = (props) => {
  return (
    <>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={props.className}
      ></input>
    </>
  );
};
