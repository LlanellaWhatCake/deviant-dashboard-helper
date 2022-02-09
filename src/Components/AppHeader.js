import React from 'react';
import ReactDOM from 'react-dom';
import theme from "../Styling/DarkTheme";

const styles = {
    color: theme.palette.textMain.light,
    display: "flex",
    flexDirection: "column",
    fontSize: 30,
    alignItems: "center",
    padding: 20
}

const AppHeader = () => {
    return (
        <header style={{ ...styles }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#1e2125",
                width: 500,
                alignItems: "center",
                padding: 10,
                boxShadow: "20px 30px 20px #1e2125"

            }}>
                Deviant Dashboard Helper
                <span style={{ color: theme.palette.textMain.main, fontSize: 20 }}>
                    Helper app made by <a href="https://www.deviantart.com/llanellawhatcake" target="_blank">LlanellaWhatCake</a>
                </span>
                <span style={{ color: theme.palette.textMain.main, fontSize: 20 }}>
                    This app is in no way endorsed by DeviantArt
                </span>
            </div>

        </header>
    );
}

export default AppHeader;