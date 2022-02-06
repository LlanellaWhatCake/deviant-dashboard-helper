import React from 'react';
import ReactDOM from 'react-dom';
import theme from "../Styling/DarkTheme";

const style = {
    background: theme.palette.backgroundMain.main,
    display: "flex",
    flex: 1
}
 
const MainDashboard = () =>
{
  return (
      <div style={style}>
          Hi, I'm a container
      </div>
  );
}
 
export default MainDashboard;