import { ApplicationInsights } from '@microsoft/applicationinsights-web';
const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: '3c56c89f-43e0-4de0-9971-900ab2f3a2e1',
    autoTrackPageVisitTime: true,
    enableAutoRouteTracking: true,
    /* ...Other Configuration Options... */
  },
});
export function useAppInsights() {
  return appInsights;
}
