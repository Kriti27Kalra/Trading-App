import React from 'react';

const AlertMessage = ({ type = 'success', message }) => {
  if (!message) return null;

  const alertClass = type === 'error' ? 'alert-danger' : 'alert-success';

  return (
    <div className={`alert ${alertClass}`} role="alert">
      {message}
    </div>
  );
};

export default AlertMessage;
