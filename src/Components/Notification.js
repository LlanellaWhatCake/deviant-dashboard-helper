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
import Avatar from '@mui/material/Avatar';


export const Notification = (props) => {

    const { username, avatarSrc, notifSummary, notifDetails, deviationSrc } = props;
    const [selected, setSelected] = useState(false); //change to whatever the props say later
    const [styleContext, setStyleContext] = useContext(StyleContext);


    const toggleCheckbox = checked => {
      setSelected(checked);
    }

    const style = {
        container: {
            display: "flex",
            justifyContent: "space-around",
            margin: "10px 0",
            padding: "10px 0",
            background: styleContext.theme.palette.backgroundThird.main
        },
        notifMainContent: {
          width: "100%",
          display: "flex",
          justifyContent: "space-around"
        },
        checkbox: {
          margin: "0 20px",
         '& .MuiSvgIcon-root': { 
           fontSize: 35 
          }
        },
        avatar: {
          margin: "0 20px",
          width: 56, 
          height: 56 
        },
        informationBlock: {
          width: "100%",
          margin: "0 30px"
        },
        notifDetails: {
          background: styleContext.theme.palette.backgroundSecondary.main
        }
    }
  

  return (
    <Paper sx={{ ...style.container }}>
      <div style={{ ...style.notifMainContent }}>
        <Checkbox checked={selected} sx={{ ...style.checkbox }}  onClick={({target: { checked }}) => {
          toggleCheckbox(checked);
        }} />
        <Avatar src={avatarSrc} variant="rounded" sx={{ ...style.avatar }} />
        <div style={{ ...style.informationBlock }}>
        {notifSummary}
        <div style={{ ...style.notifDetails }}>
          {notifDetails}
        </div>
          </div>
      
      </div>
        
    </Paper>

  );
}

export default Notification;