import PropTypes from 'prop-types';

const PicklistOption = ({ option }) => {
  return (
    <option 
      value={option.value}
    >
      {option.label}
    </option>
  );
}

const Picklist = (props) => {

  const mbtiOptions = props.options;

  return (
    <>
      <label htmlFor={props.inputId}>{props.label}</label>
      <select 
        className="form-select" 
        aria-label="picklist options"
        id={props.inputId}
      >
        <option selected>{props.placeholder}</option>
        {      mbtiOptions.map((item, index) => {
          return(<PicklistOption option={item} key={index} />);
        
      })}

      </select>
    </>

  )
}

PicklistOption.propTypes = {
  option: PropTypes.object
}

Picklist.propTypes = {
  options: PropTypes.array,
  inputId: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string
}

export default Picklist