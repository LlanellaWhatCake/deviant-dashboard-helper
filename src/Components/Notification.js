import React, { useContext, useState } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import { StyleContext } from "../Contexts/StyleContext";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';



export const Notification = (props) => {

    // const {  } = props;


    const style = {
        container: {
            display: "flex",
            justifyContent: "space-around",
            margin: "10px 0"
        }
    }
  

  return (
    <Paper sx={{ ...style.container }}>
      <Box>
        <Checkbox />
      Placeholder Notif!
      </Box>
        
    </Paper>

  );
}

export default Notification;