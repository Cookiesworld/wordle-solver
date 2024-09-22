import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';
import { createBrowserHistory } from "history";
const key = import.meta.env.VITE_APP_APPINSIGHTS_INSTRUMENTATIONKEY;
const browserHistory = createBrowserHistory({ basename: '' });
const reactPlugin = new ReactPlugin();
const appInsights = new ApplicationInsights({
    config: {
        instrumentationKey: key,
        enableAutoRouteTracking: true,
        extensions: [reactPlugin],
        extensionConfig: {
            [reactPlugin.identifier]: { history: browserHistory }
        }
    }
});
appInsights.loadAppInsights();

export { appInsights };
export { reactPlugin };

