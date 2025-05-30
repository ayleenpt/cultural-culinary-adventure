import '../../../styles/recipes/create/FormGroup.css';

function FormGroup({ label, Component, componentProps, style }) {
  return (
    <div className="form-group" style={style}>
      <label>{label}</label>
      <Component {...componentProps} />
    </div>
  );
}

export default FormGroup;