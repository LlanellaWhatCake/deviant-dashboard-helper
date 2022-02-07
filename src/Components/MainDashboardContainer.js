import React from 'react';
import ReactDOM from 'react-dom';
import theme from "../Styling/DarkTheme";
import AppHeader from "./AppHeader";

const style = {
    background: theme.palette.backgroundMain.main,
    backgroundImage: `url(${theme.spaceBackground.src})`,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    flex: 1
}
 
const MainDashboardContainer = () =>
{
  return (
      <div style={style}>
          <AppHeader />
          
      </div>
  );
}
 
export default MainDashboardContainer;