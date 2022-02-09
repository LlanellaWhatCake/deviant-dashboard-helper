import React, { createContext, useState, useEffect } from "react";
import { THEME_OPTIONS } from "../StaticData/ThemeOptionsList";
import darkTheme from "../Styling/DarkTheme";
import { ThemeProvider } from '@material-ui/core';


const defaultContext = {
    theme: THEME_OPTIONS.dark,
    mainContainerWidth: "100%",
    sidebarWidth: 100
}

export const StyleContext = createContext({ ...defaultContext });

export const StyleContextProvider = ({ children }) => {
    const [context, setContext] = useState(defaultContext);

    return (
        <StyleContext.Provider value={[context, setContext]}>
            <ThemeProvider theme={darkTheme}>
                {children}
            </ThemeProvider>
        </StyleContext.Provider>
    );
}