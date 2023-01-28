import "./Button.css";

const Button = (props) => {
  const cssStyles = { backgroundColor: props.color, color: props.textColor };

  return (
    <div className="button">
      <button style={cssStyles} >{props.text}</button>
    </div>
  );
};

export default Button;
