import React from 'react';

const Alert = ({ error, msg, color, success }) => {
  const alertStyle = {
    marginTop: '15px',
  };

  return (
    <>
      {error && (
        <div className={`alert alert-${color}`} role="alert" style={alertStyle}>
          {msg}
        </div>
      )}
      {success && (
        <div className="alert alert-success" role="alert" style={alertStyle}>
          {msg}
        </div>
      )}
    </>
  );
};

export default Alert;

