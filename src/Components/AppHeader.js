import React from 'react';
import ReactDOM from 'react-dom';
import theme from "../Styling/DarkTheme";

const styles = {
        color: theme.palette.textMain.light,
        display: "flex",
        flexDirection: "column",
        fontSize: 40
}
 
const AppHeader = () =>
{
  return (
      <header style={{...styles}}>
          Deviant Dashboard Helper
          <span style={{ color: theme.palette.textMain.main, fontSize: 20 }}>
          Helper app made by <a href="https://www.deviantart.com/llanellawhatcake" target="_blank">LlanellaWhatCake</a>
          </span>
          <span style={{ color: theme.palette.textMain.main, fontSize: 20 }}>
          This app is in no way endorsed by DeviantArt
          </span>
      </header>
  );
}
 
export default AppHeader;