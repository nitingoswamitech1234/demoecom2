import { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = 'https://embed.tawk.to/6799cc4e3a84273260769a33/1iiocc55g';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin','*');
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return null; // Since it's a widget, no UI elements needed
};

export default TawkToChat;



