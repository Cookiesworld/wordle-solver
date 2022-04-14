import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import {
    ReactPlugin,
    withAITracking
} from "@microsoft/applicationinsights-react-js";
import { createBrowserHistory } from "history";
const browserHistory = createBrowserHistory({ basename: '' });

const reactPlugin = new ReactPlugin();
const ai = new ApplicationInsights({
    config: {
        instrumentationKey: process.env.APPINSIGHTS_INSTRUMENTATIONKEY,
        extensions: [reactPlugin],
        extensionConfig: {
            [reactPlugin.identifier]: { history: browserHistory }
        }
    }
});
ai.loadAppInsights();

export default Component => withAITracking(reactPlugin, Component);
export const appInsights = ai.appInsights;
export { reactPlugin };