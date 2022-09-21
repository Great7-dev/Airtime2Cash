import "./Input.css";

const InputField = ({ ...props }) => {
  return (
    <div className="input-group">
      <div className="input-label">{props.label}</div>
      <div>
        <input
          name={props.name}
          type={props.type}
          value={props.value}
          className={props.class}
          placeholder={props.placeholder}
          onChange={props.change}
        />
      </div>
    </div>
  );
};

export default InputField;
