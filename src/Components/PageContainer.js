import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import theme from "../Styling/DarkTheme";
import Box from '@mui/material/Box';
import { StyleContext } from "../Contexts/StyleContext";

const styles = {
    mainBox: {
        background: theme.palette.backgroundSecondary.main,
        height: "100%"
    }
}
 
export const PageContainer = () =>
{
    const [styleContext, setStyleContext] = useContext(StyleContext);
    

  return (
      <Box sx={{
          ...styles.mainBox,
          width: `calc(100% - ${styleContext.sidebarWidth + 30}px)`
      }}>
          Container!
      </Box>
  );
}
 
export default PageContainer;