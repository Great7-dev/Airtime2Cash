import { StyleFormInput } from "./FormInputStyle";

const InputField = ({ ...props }) => {
  return (
      <div>
      <div className="input-label">{props.label}</div>

        <StyleFormInput 
          name={props.name}
          type={props.type}
          value={props.value}
          className={props.class}
          placeholder={props.placeholder}   
          onChange={props.change}
        />
      </div>
  );
};

export default InputField;

