import React, { CSSProperties } from 'react';

const Donate: React.FC = () => {
  const openExternalLink = () => {
    // Replace 'https://example.com' with the external link you want to open.
    window.open('https://paypal.me/levi2441', '_blank');
  };

  const containerStyle: CSSProperties = {
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    maxWidth: '400px',
    margin: '0 auto',
    marginTop: '200px', // Add margin-top directly as an inline style
  };

  const buttonStyle: CSSProperties = {
    backgroundColor: '#800000',
    color: '#ffffff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
  };


  return (
    <div style={containerStyle}>
      <h1>Pi Delta Psi loves its alumni!
      </h1>
      <p>The brothers are working towards strenghtening alumni and family connections
        towards the goal of a more united brotherhood.
        Please consider donating so that this page can look prettier.</p>
      <button style={buttonStyle} onClick={openExternalLink}>
        Donate
      </button>
    </div>
  );
};

export default Donate;
