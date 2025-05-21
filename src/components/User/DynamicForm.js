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
        <div key={index} className="mb-3">
          <label>{label}</label>
          {type === 'select' ? (
            <select name={name} value={formData[name] || ''} onChange={handleChange} className="form-control">
              <option value="">Select</option>
              {options?.map((opt, i) => (
                <option key={i} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          ) : type === 'textarea' ? (
            <textarea
              name={name}
              value={formData[name] || ''}
              onChange={handleChange}
              placeholder={placeholder}
              className="form-control"
            />
          ) : (
            <input
              type={type}
              name={name}
              value={formData[name] || ''}
              onChange={handleChange}
              placeholder={placeholder}
              className="form-control"
            />
          )}
        </div>
      ))}
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default DynamicForm;
