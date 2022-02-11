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

  return (
    <>
    
        <Routes>
          <Route path="/" element={<DashboardFrontPage />} />
          <Route path="/notifications" element={<NotificationPage />} />
        </Routes>
    </>

  );
}

export default PageContainer;