import React, { createContext, useState, useEffect } from "react";
import { THEME_OPTIONS } from "../StaticData/ThemeOptionsList";
import darkTheme from "../Styling/DarkTheme";
import lightTheme from "../Styling/LightTheme";
import { ThemeProvider } from '@material-ui/core';


const defaultContext = {
    themeName: THEME_OPTIONS.dark,
    mainContainerWidth: "100%",
    sidebarWidth: 100,
    theme: darkTheme
}

export const StyleContext = createContext({ ...defaultContext });

export const StyleContextProvider = ({ children }) => {
    const [context, setContext] = useState(defaultContext);

    return (
        <StyleContext.Provider value={[context, setContext]}>
            <ThemeProvider theme={context?.theme}>
                {children}
            </ThemeProvider>
        </StyleContext.Provider>
    );
}