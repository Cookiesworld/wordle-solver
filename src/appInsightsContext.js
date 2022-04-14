import React, { createContext } from "react";
import { reactPlugin } from "./appInsights";

const AppInsightsContext = createContext(reactPlugin);

const AppInsightsContextProvider = ({ children }) => {
    return (
        <AppInsightsContext.Provider value={reactPlugin}>
            {children}
        </AppInsightsContext.Provider>
    );
};

export { AppInsightsContext, AppInsightsContextProvider };