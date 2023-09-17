
const Donate: React.FC = () => {
  const handleButtonClick = () => {
    // Replace 'https://example.com' with the external link you want to open.
    window.open('https://www.paypal.com/paypalme/CornellPiDeltaPsi?country.x=US&locale.x=en_US', '_blank');
  };

  return (
    <div className="external-link-container">
      <div style={{ position: "relative" }}>
        <h1>hi </h1>
        <p>Pi Delta Psi loves its alumni but sadly cannot afford a fullstack engineer.
          Please consider donating so that this page can look prettier.
        </p>
        <button onClick={handleButtonClick}>Open External Link</button>
      </div>
      <br />
      donate pls
    </div>
  );
};

export default Donate;