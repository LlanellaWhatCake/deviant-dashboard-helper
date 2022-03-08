import React, { useContext } from 'react';

import ReactDOM from 'react-dom';
import theme from "../Styling/DarkTheme";
import { StyleContext } from "../Contexts/StyleContext";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { style } from '@mui/system';

 
export const DashboardCard = ({ title, icon, notifications, iconColor }) =>
{
    const [styleContext, setStyleContext] = useContext(StyleContext);
    const styles = {
        card: {
            background: styleContext.theme.palette.card.main,
            width: 200,
            height: 200,
            margin: "15px",
            color: styleContext.theme.palette.textMain.light,
            '&:hover': {
                boxShadow: `0px 0px 10px 10px ${styleContext.theme.palette.primary.main}`,
                cursor: "pointer"
             },
             border: `1px solid ${styleContext.theme.palette.primary.main}`,
             fontSize: styleContext.theme.fontSize.medium
        },
        icon: {
            fontSize: 100,
            color: styleContext.theme.palette.primary.main,
            display: "flex",
            justifyContent: "center"
        },
        title: {
            display: "flex",
            justifyContent: "center"
        }
    }

    
    const DashboardBadge = styled(Badge)(( ) => ({
        '& .MuiBadge-badge': {
          right: 30,
          top: 20,
          padding: '0 4px',
          height: 50,
          background: styleContext.theme.palette.primary.main,
          fontSize: 20,
          borderRadius: 40,
          padding: "0 20px"
        },
      }));




  return (
      <>
      <DashboardBadge badgeContent={notifications} color="primary">
      <Card sx={{
          ...styles.card
      }}>
          
          <CardContent sx={{
              ...styles.icon
          }}>
          {icon}
              
          </CardContent>
          <CardActions sx={{ ...styles.title }}>
          {title}
      </CardActions>

      </Card>
      </DashboardBadge>
      
      </>
      
  );
}
 
export default DashboardCard;