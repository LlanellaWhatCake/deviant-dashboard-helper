import React from 'react';
import DashboardCard from "../Components/DashboardCard";
import NotificationsIcon from '@mui/icons-material/Notifications';
import PreviewIcon from '@mui/icons-material/Preview';
import { StyleContext } from "../Contexts/StyleContext";

const style = {
    mainContainer: {
        display: "flex",
        flexDirction: "row",
        flexWrap: "wrap"
    }
}

const iconSize = 100;



const DashboardFrontPage = () => {

    const mainDashboardOptions = [{
        name: "Notifications",
        icon: <NotificationsIcon sx={{ fontSize: iconSize }} />,
        iconColor: "primary"
    },
    {
        name: "Deviants You Watch",
        icon: <PreviewIcon sx={{ fontSize: iconSize }} />,
        iconColor: "primary"
    }];
    return (
        <div style={{ ...style.mainContainer }}>
            {mainDashboardOptions.map(option => {
                return <DashboardCard title={option.name} icon={option.icon} iconColor={option.iconColor} />
            })}
        </div>
    );
}

export default DashboardFrontPage;