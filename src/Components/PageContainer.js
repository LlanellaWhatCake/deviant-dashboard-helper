import React, { useContext } from 'react';
import {
    Routes,
    Route
  } from "react-router-dom";
import ReactDOM from 'react-dom';
import theme from "../Styling/DarkTheme";
import Box from '@mui/material/Box';
import { StyleContext } from "../Contexts/StyleContext";
import DashboardFrontPage from '../Pages/DashboardFrontPage';


const styles = {
    mainBox: {
        background: theme.palette.backgroundSecondary.main,
        height: "100%",
        marginLeft: "25px"
    }
}
 
export const PageContainer = () =>
{
    const [styleContext, setStyleContext] = useContext(StyleContext);
    

  return (
      <Box sx={{
          ...styles.mainBox,
          width: `calc(100% - ${styleContext.sidebarWidth + 75}px)`
      }}>
          <Routes>
            <Route path="/" element={<DashboardFrontPage />} />
          </Routes>
      </Box>
  );
}
 
export default PageContainer;