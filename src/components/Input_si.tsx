import "./Input_si.css";

const Input_si = (props):JSX.Element => {

  // console.log(props)
  const title=props.title
  const type=props.input_type
  const placeholder=props.placeholder

  return (
    <div className="input-si">
      <div className="input-si-title">{title}</div>
      <input
        className="input-si-box"
        type={type}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default Input_si;
