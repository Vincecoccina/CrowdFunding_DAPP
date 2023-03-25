import React from 'react';
import classes from "./FormField.module.css";

const FormField = ({ labelName, placeholder, inputType, isTextArea, value, handleChange }) => {
  return (
    <label className={classes.labelField}>
    {labelName && (
      <span className={classes.label}>{labelName}</span>
    )}
    {isTextArea ? (
      <textarea 
        required
        value={value}
        onChange={handleChange}
        rows={10}
        placeholder={placeholder}
        className={classes.textarea}
      />
    ) : (
      <input 
        required
        value={value}
        onChange={handleChange}
        type={inputType}
        step="0.1"
        placeholder={placeholder}
        className={classes.input}
      />
    )}
  </label>
  )
}

export default FormField
