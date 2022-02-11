import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { StyleContext } from "../Contexts/StyleContext";


const AppHeader = () => {
    const [styleContext, setStyleContext] = useContext(StyleContext);
    const styles = {
        outerContainer: {
            color: styleContext.theme.palette.textMain.light,
            display: "flex",
            flexDirection: "column",
            fontSize: 25,
            alignItems: "center",
            padding: 20
        },
        header: {
            display: "flex",
            flexDirection: "column",
            backgroundColor: styleContext.theme.palette.backgroundMain.main,
            width: 500,
            alignItems: "center",
            padding: 10,
            boxShadow: `0px 0px 40px 40px ${styleContext.theme.palette.backgroundMain.main}`
        },
        subText: {
            color: styleContext.theme.palette.textMain.main, 
            fontSize: 15
        }
        
    }

    return (
        <header style={{ ...styles.outerContainer }}>
            <div style={{...styles.header}}>
                Deviant Dashboard Helper
                <span style={{ ...styles.subText }}>
                    Helper app made by <a href="https://www.deviantart.com/llanellawhatcake" target="_blank">LlanellaWhatCake</a>
                </span>
                <span style={{ ...styles.subText }}>
                    This app is in no way endorsed by DeviantArt
                </span>
            </div>

        </header>
    );
}

export default AppHeader;