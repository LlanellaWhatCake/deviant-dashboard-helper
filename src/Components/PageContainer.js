import React, { useContext } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import { StyleContext } from "../Contexts/StyleContext";
import DashboardFrontPage from '../Pages/DashboardFrontPage';
import NotificationPage from '../Pages/NotificationPage';



export const PageContainer = () => {
  const [styleContext, setStyleContext] = useContext(StyleContext);
  const styles = {
    mainBox: {
      background: styleContext.theme.palette.backgroundSecondary.main,
      marginLeft: "25px",
      padding: "20px 20px 20% 20px"
    }
  }

  return (
    <>
      <Box sx={{
        ...styles.mainBox,
        width: `calc(100% - ${styleContext.sidebarWidth + 125}px)`
      }}>
        <Routes>
          <Route path="/" element={<DashboardFrontPage />} />
          <Route path="/notifications" element={<NotificationPage />} />
        </Routes>
      </Box>
    </>

  );
}

export default PageContainer;