import "./SelectInput.css";
import Select from "react-select";

const SelectInput = ({ items, placeholder, onWrite }) => {
  return (
    <div className="select-input">
      <Select
        options={items}
        placeholder={placeholder}
        classNames={{
          control: (state) => (state.isFocused ? "select-active" : ""),
        }}
        onChange={(event) => onWrite(event)}
      />
    </div>
  );
};

export default SelectInput;
