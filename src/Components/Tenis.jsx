import '../crichd.css';
import { useEffect } from 'react';

export default function Tenis() {
 
      
      const preventDefault = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Redirection blocked');
        return false;
      };
    
      const clickListener = (e) => {
        if (e.target.tagName === 'A' || e.target.closest('a')) {
          preventDefault(e);
        }
      };
    
      const submitListener = (e) => {
        preventDefault(e);
      };
    
      useEffect(() => {
        // Add event listeners
        document.addEventListener('click', clickListener);
        document.addEventListener('submit', submitListener);
    
        // Intercept beforeunload event to prevent navigation
        window.addEventListener('beforeunload', preventDefault);
    
        return () => {
          // Remove event listeners
          document.removeEventListener('click', clickListener);
          document.removeEventListener('submit', submitListener);
          window.removeEventListener('beforeunload', preventDefault);
        };
      }, []);
    
      return (
        <>
          <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; frame-src https://crichdplay.info https://crichd.li;" />
          <div className="cric_hd_container">
            <div className="cric_hd_iframe-wrapper">
              <iframe
                id="cric_hd_streaming-iframe"
                src="https://watch.crichd.run/sky-sports-tennis-hd-live-streaming-free-12"
                allowFullScreen
                className="cric_hd_iframe"
                style={{ border: 'none' }}
              ></iframe>
            </div>
          </div>
        </>
      );
}
