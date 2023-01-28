import "./SelectInput.css";
import Select from "react-select";

const SelectInput = (props) => {
  return (
    <div className="select-input">
      <Select
        options={props.items}
        placeholder={props.placeholder}
        classNames={{
          control: (state) =>
            state.isFocused ? "select-active" : "",
        }}
      />
    </div>
  );
};

export default SelectInput;
