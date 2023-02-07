import "./Input.css";

const Input = ({ maxLength, placeholder, require, onWrite }) => {
  
  const emitValue = (event) => {
    onWrite(event.target.value)    
  }
  
  return (

    <div className="input">
      <input
        type="text"
        placeholder={placeholder}
        maxLength={maxLength}
        required={require}
        onChange={emitValue}
      />
    </div>
  );
};

export default Input;
