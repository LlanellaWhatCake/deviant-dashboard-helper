import React, { useContext } from 'react';
import {
    useNavigate,
    Link 
  } from "react-router-dom";
import DashboardCard from "../Components/DashboardCard";
import { StyleContext } from "../Contexts/StyleContext";
import NotificationsIcon from '@mui/icons-material/Notifications';
import PreviewIcon from '@mui/icons-material/Preview';
import DescriptionIcon from '@mui/icons-material/Description';
import GroupsIcon from '@mui/icons-material/Groups';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ChatIcon from '@mui/icons-material/Chat';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import Container from '@mui/material/Container';


const DashboardFrontPage = () => {

    const [styleContext, setStyleContext] = useContext(StyleContext);

    const style = {
        mainContainer: {
            
        },
        boxContainers: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between"
        },
        headerText: {
            fontSize: styleContext.theme.fontSize.large,
            color: styleContext.theme.palette.textMain.main
        },
        link: {
            textDecoration: "none"
        }
    }

    const iconSize = 100;

    const myUpdates = [
        {
            name: "Notifications",
            icon: <NotificationsIcon sx={{ fontSize: iconSize }} />,
            iconColor: "primary",
            link: "/notifications"
        },
        {
            name: "Deviants You Watch",
            icon: <PreviewIcon sx={{ fontSize: iconSize }} />,
            iconColor: "primary"
        },
        {
            name: "Notes",
            icon: <DescriptionIcon sx={{ fontSize: iconSize }} />,
            iconColor: "primary"
        },
        {
            name: "My Groups",
            icon: <GroupsIcon sx={{ fontSize: iconSize }} />,
            iconColor: "primary"
        },
        {
            name: "My Stash",
            icon: <FilterNoneIcon sx={{ fontSize: iconSize }} />,
            iconColor: "primary"
        },
        {
            name: "Account Settings",
            icon: <GroupsIcon sx={{ fontSize: iconSize }} />,
            iconColor: "primary"
        }
        ];

        const browseCategories = [
            {
                name: "Daily Deviations",
                icon: <MilitaryTechIcon sx={{ fontSize: iconSize }} />,
                iconColor: "primary"
            },
            {
                name: "Forums",
                icon: <ChatIcon sx={{ fontSize: iconSize }} />,
                iconColor: "primary"
            },
            {
                name: "Browse Groups",
                icon: <ChatIcon sx={{ fontSize: iconSize }} />,
                iconColor: "primary"
            },
            {
                name: "Popular Section",
                icon: <ChatIcon sx={{ fontSize: iconSize }} />,
                iconColor: "primary"
            },
            {
                name: "Team Account Updates",
                icon: <ChatIcon sx={{ fontSize: iconSize }} />,
                iconColor: "primary"
            },
            {
                name: "Support/Help Desk",
                icon: <ChatIcon sx={{ fontSize: iconSize }} />,
                iconColor: "primary"
            }
        ];

    return (
        <Container sx={{ ...style.mainContainer }} maxWidth={false}>
            <Typography sx={{ ...style.headerText }}>
                My Notifications
            </Typography>
            <Box sx={{ ...style.boxContainers}}>
            {myUpdates.map(option => {
                return <Link to={option.link ? option.link : "/"} style={{ textDecoration: 'none' }}>
                <DashboardCard title={option.name} icon={option.icon} iconColor={option.iconColor} />
                </Link>
            })}
            </Box>
            
            <Typography sx={{ ...style.headerText }}>
                Explore
            </Typography>
            <Box sx={{ ...style.boxContainers}}>
            {browseCategories.map(option => {
                return <DashboardCard title={option.name} icon={option.icon} iconColor={option.iconColor} />
            })}
            </Box>
            
        </Container>
    );
}

export default DashboardFrontPage;