import "./Input.css";

const Input = ({
  inputValue,
  maxLength,
  placeholder,
  require,
  onWrite,
  type,
}) => {
  const emitValue = (event) => {
    onWrite(event.target.value);
  };

  return (
    <div className="input">
      <input
        type={type}
        value={inputValue}
        placeholder={placeholder}
        maxLength={maxLength}
        required={require}
        onChange={emitValue}
      />
    </div>
  );
};

export default Input;
