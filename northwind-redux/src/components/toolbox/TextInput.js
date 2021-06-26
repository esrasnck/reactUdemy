import React from "react";

// bu isimlerle bir prop gelince bunlar eşleşiyor
const TextInput = ({ name, label, onChange, placeHolder, value, error }) => {
  let wrapperClass = "form-group"; // textbox ve label'a bootstrap veriliyor
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}></label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
        />
        {error&&<div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default TextInput;
