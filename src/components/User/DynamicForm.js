import React, { useState } from 'react';

const DynamicForm = ({ fields = [], onSubmit, initialValues = {} }) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(({ name, label, type = 'text', placeholder, options }, index) => (
        <div key={index} className="form-group row align-items-center mb-3">
          <label htmlFor={name} className="col-md-3 col-form-label">
            {label}
          </label>
          <div className="col-md-9">
            {type === 'select' ? (
              <select
                id={name}
                name={name}
                value={formData[name] || ''}
                onChange={handleChange}
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
                onChange={handleChange}
                placeholder={placeholder}
                className="form-control"
              />
            ) : (
              <input
                id={name}
                type={type}
                name={name}
                value={formData[name] || ''}
                onChange={handleChange}
                placeholder={placeholder}
                className="form-control"
              />
            )}
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
