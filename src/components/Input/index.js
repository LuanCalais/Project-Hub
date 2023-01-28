import "./Input.css";

const Input = (props) => {
  return (
    <div className="input">
      <input type="text" placeholder={props.placeholder} maxLength={props.maxLength}/>
    </div>
  );
};

export default Input;
