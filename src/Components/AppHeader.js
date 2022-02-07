import React from 'react';
import ReactDOM from 'react-dom';
import theme from "../Styling/DarkTheme";

const styles = {
        color: theme.palette.textMain.light,
        display: "flex",
        
}
 
const AppHeader = () =>
{
  return (
      <header style={{...styles}}>
          Deviant Dashboard Helper
          <span>

          </span>
      </header>
  );
}
 
export default AppHeader;