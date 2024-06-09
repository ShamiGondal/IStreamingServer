import '../App.css';
import { useEffect } from 'react';

export default function StarSports_1() {
  useEffect(() => {
    const iframe = document.getElementById('streaming-iframe');

    const blockAdsAndRedirects = () => {
      if (iframe && iframe.contentWindow) {
        const iframeWindow = iframe.contentWindow;

        // Block popups and new windows
        iframeWindow.open = function () {
          console.log('Blocked a popup');
          return null;
        };
        iframeWindow.alert = function () {
          console.log('Blocked an alert');
          return null;
        };
        iframeWindow.confirm = function () {
          console.log('Blocked a confirm dialog');
          return null;
        };
        iframeWindow.prompt = function () {
          console.log('Blocked a prompt dialog');
          return null;
        };

        // Prevent redirections
        const preventRedirection = (event) => {
          event.stopPropagation();
          event.preventDefault();
          console.log('Blocked a redirection');
        };

        iframeWindow.onbeforeunload = function () {
          return 'Prevented redirection';
        };

        const blockLinks = () => {
          const links = iframeWindow.document.querySelectorAll('a');
          links.forEach(link => {
            link.addEventListener('click', preventRedirection);
          });
        };

        const blockAdRedirections = () => {
          const elements = iframeWindow.document.querySelectorAll('a, form');
          elements.forEach(element => {
            element.addEventListener('click', preventRedirection);
            element.addEventListener('submit', preventRedirection);
          });
        };


        // Block ad scripts
        const blockScripts = () => {
          const scripts = iframeWindow.document.querySelectorAll('script[src*="ad"], iframe[src*="ad"]');
          scripts.forEach(script => script.remove());
        };

        // Remove ads and block links periodically
        setInterval(() => {
          blockScripts();
          const ads = iframeWindow.document.querySelectorAll('.ad, .ads, .advertisement');
          ads.forEach(ad => ad.remove());
          blockLinks();
          blockAdRedirections();
        }, 1000);
      }
    };

    iframe.onload = blockAdsAndRedirects;
  }, []);

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
      <div className="container">
        <div className="iframe-wrapper">
          <iframe
            id="streaming-iframe"
            src="https://crichdplay.info/channel/star-sports-1-live-streaming-free-11/"
            allowFullScreen
            className="iframe"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </div>
    </>
  );
}
