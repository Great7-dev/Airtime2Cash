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
// import './Input.css';

// const InputField = ({
//     ...props
// }) => {

//     return (

//         <div className="input-group">
//             <div className="input-label">
//                 {props.label}
//             </div >
//             <div >
//                 <input name={props.name} type={props.type} className={props.class} placeholder={props.placeholder} onChange={props.onChange}/>
//             </div>
//         </div >


//     )
// }

// export default InputField
// >>>>>>> c8b7a1de06285dcca5fe89df224adf5d09a84ba2
