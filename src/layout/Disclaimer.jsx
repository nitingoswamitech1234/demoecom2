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
      <div className="max-w-6xl mx-auto flex flex-col justify-between items-center gap-4">
        <p className="text-center sm:text-left">
          ⚠️ Who We are Law Firm is established with a
        vision to provide a comprehensive legal solution to every legal need of
        its clients with the best legal knowledge and acumen coming from the
        experienced Lawyers and Advocates. Expert and learned lawyers of
        Vidhikarya are highly dedicated and digitally equipped to deliver fast
        and reliable solution to clients in this fast-paced world. We are a Law
        Firm having expertise to handle all kinds of legal matters in all three
        aspects of legal services viz. Litigation & ADR, Advisory and Legal
        Training. Our team of expert lawyer are capable to handle matters in
        multiple domains like Civil, Criminal, Matrimonial, Property, IPR,
        Corporate, Banking, Insurance, Cybercrime, Mediation, Online Dispute
        resolution and matters related to NCLT, CAT, Consumer Forum/Commission.
        Our unique approach helps our clients to navigate through the legal
        issues with ease. 
       
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
