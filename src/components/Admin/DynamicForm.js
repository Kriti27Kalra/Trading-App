import React, { useState } from 'react';

const DynamicForm = ({ fields = [], onSubmit, initialValues = {} }) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e, customOnChange) => {
    const { name, value, type, checked } = e.target;
    let processedValue = value;

    if (type === 'checkbox') {
      processedValue = checked;
    } else if (type === 'number') {
      processedValue = value === '' ? '' : Number(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: processedValue,
    }));

    if (customOnChange) {
      customOnChange(processedValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(({ name, label, type = 'text', placeholder, options, onChange, extraContent }, index) => (
        <div key={index} className="form-group row align-items-start mb-3">
          <label htmlFor={name} className="col-md-3 col-form-label">
            {label}
          </label>
          <div className="col-md-9">
            {type === 'select' ? (
              <select
                id={name}
                name={name}
                value={formData[name] || ''}
                onChange={(e) => handleChange(e, onChange)}
                className="form-control"
              >
                <option value="">Select</option>
                {options?.map((opt, i) => (
                  <option key={i} value={opt.value || opt}>
                    {opt.label || opt}
                  </option>
                ))}
              </select>
            ) : type === 'textarea' ? (
              <textarea
                id={name}
                name={name}
                value={formData[name] || ''}
                onChange={(e) => handleChange(e, onChange)}
                placeholder={placeholder}
                className="form-control"
              />
            ) : (
              <input
                id={name}
                type={type}
                name={name}
                value={formData[name] || ''}
                onChange={(e) => handleChange(e, onChange)}
                placeholder={placeholder}
                className="form-control"
              />
            )}
            {extraContent && <div className="mt-1">{extraContent}</div>}
          </div>
        </div>
      ))}

      <div className="form-group row">
        <div className="col-md-9 offset-md-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default DynamicForm;
