import { ReportCallback } from 'web-vitals';

const reportWebVitals = async (onPerfEntry?: ReportCallback) => {
  if (onPerfEntry) {
    await import('web-vitals')
      .then(({ onCLS, onFCP, onFID, onINP, onLCP, onTTFB }) => {
        onCLS(onPerfEntry);
        onFCP(onPerfEntry);
        onFID(onPerfEntry);
        onINP(onPerfEntry);
        onLCP(onPerfEntry);
        onTTFB(onPerfEntry);
      })
      .catch((error) => {
        // Handle any error that may occur during the `import` or `promise` execution:
        console.error('An error occurred:', error);
      });
  }
};

export default reportWebVitals;
