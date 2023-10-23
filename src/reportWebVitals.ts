import { ReportHandler } from 'web-vitals';

// Этот код связан с измерением и отчетностью о веб-метриках (web vitals) с использованием библиотеки web-vitals. Web vitals представляют собой набор ключевых метрик, которые оценивают производительность и пользовательский опыт веб-сайта. Эти метрики включают Core Web Vitals, такие как Largest Contentful Paint (LCP), First Input Delay (FID), Cumulative Layout Shift (CLS), и другие.

const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({
      getCLS, getFID, getFCP, getLCP, getTTFB
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
