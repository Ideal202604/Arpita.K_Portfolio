import { useEffect } from 'react';

const ELFSIGHT_SCRIPT_ID = 'elfsight-platform-script';
const ELFSIGHT_SCRIPT_SRC = 'https://elfsightcdn.com/platform.js';

const ChatbotWidget: React.FC = () => {
  useEffect(() => {
    const existingScript = document.getElementById(ELFSIGHT_SCRIPT_ID) as HTMLScriptElement | null;

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = ELFSIGHT_SCRIPT_ID;
      script.src = ELFSIGHT_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="elfsight-app-8fdfb546-70ef-4be1-8142-05a8bc16f51b"
      data-elfsight-app-lazy
    />
  );
};

export default ChatbotWidget;