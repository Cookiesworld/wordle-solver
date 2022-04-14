import { useEffect } from "react";
const useCustomEvent = (reactPlugin, eventName, eventData) => {
    useEffect(() => {
        reactPlugin.trackEvent({ name: eventName }, eventData);
    }, [reactPlugin, eventName, eventData]);
};
export default useCustomEvent;