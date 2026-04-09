import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Initialize React
createRoot(document.getElementById("root")!).render(<App />);

// Defer Web Vitals monitoring until after page interactive
if (typeof window !== 'undefined') {
  // Run after browser is idle
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      setupPerformanceMonitoring();
    }, { timeout: 2000 });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      setupPerformanceMonitoring();
    }, 2000);
  }
}

function setupPerformanceMonitoring() {
  // Core Web Vitals monitoring - deferred
  const reportWebVital = (metric: any) => {
    if (window.location.hostname !== 'localhost') {
      // Send metrics to analytics in production
      console.log(`${metric.name}: ${metric.value}`);
    }
  };

  if ('PerformanceObserver' in window) {
    try {
      // Observe Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          reportWebVital({ name: 'CLS', value: entry.value });
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // Silently fail if observers not supported
    }
  }
}
