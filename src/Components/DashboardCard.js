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

const styles = {
    card: {
        background: theme.palette.card.main,
        width: 200,
        height: 200,
        margin: "10px"
    },
    icon: {
        fontSize: 100
    }
}

const DashboardBadge = styled(Badge)(( ) => ({
    '& .MuiBadge-badge': {
      right: 30,
      top: 20,
      padding: '0 4px',
      height: 50,
      background: theme.palette.primary.main,
      fontSize: 20,
      borderRadius: 40,
      padding: "0 20px"
    },
  }));
 
export const DashboardCard = ({ title, icon, notifications, iconColor }) =>
{
    const [styleContext, setStyleContext] = useContext(StyleContext);
    

  return (
      <>
      <DashboardBadge badgeContent={4} color="primary">
      <Card sx={{
          ...styles.card
      }}>
          
          <CardContent sx={{
              ...styles.icon
          }}>
          {icon}
              
          </CardContent>
          <CardActions>
          {title}
      </CardActions>

      </Card>
      </DashboardBadge>
      
      </>
      
  );
}
 
export default DashboardCard;