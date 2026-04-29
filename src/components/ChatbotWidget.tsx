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
      className="elfsight-app-8fdfb546-70ef-4be1-8142-05a8bc16f51b fixed right-4 z-[70]"
      data-elfsight-app-lazy
      style={{
        /* === CHATBOT POSITIONING: Above footer, responsive === */
        bottom: 'clamp(24px, 5vw, 100px)', /* Responsive bottom spacing */
        /* Prevents overlap with footer content on mobile/tablet/desktop */
      }}
    />
  );
};

export default ChatbotWidget;