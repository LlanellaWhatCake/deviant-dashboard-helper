import React, { useContext } from 'react';
import {
    Routes,
    Route
  } from "react-router-dom";
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import { StyleContext } from "../Contexts/StyleContext";
import DashboardFrontPage from '../Pages/DashboardFrontPage';



 
export const PageContainer = () =>
{
    const [styleContext, setStyleContext] = useContext(StyleContext);
    const styles = {
        mainBox: {
            background: styleContext.theme.palette.backgroundSecondary.main,
            height: "100%",
            marginLeft: "25px"
        }
    }

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