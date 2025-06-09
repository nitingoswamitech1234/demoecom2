import React, { useEffect, useState } from 'react';

const Disclaimer = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('disclaimerAccepted');
    if (!accepted) {
      setShowDisclaimer(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('disclaimerAccepted', 'true');
    setShowDisclaimer(false);
  };

  if (!showDisclaimer) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white text-sm px-4 py-3 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-center sm:text-left">
          ⚠️ Vidhikarya is a law firm with 10+ years of experience offering legal services in Civil, Criminal, Matrimonial, Corporate, and Cyber Law. By using this site, you agree to our terms.
        </p>
        <button
          onClick={handleAccept}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
          aria-label="Accept Disclaimer"
        >
          I Agree
        </button>
      </div>
    </div>
  );
};

export default Disclaimer;
