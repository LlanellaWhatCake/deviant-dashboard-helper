import React, { useContext, useState } from 'react';
import DashboardCard from "../Components/DashboardCard";
import { StyleContext } from "../Contexts/StyleContext";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NOTIFICATION_TABS } from '../StaticData/NotificationTabs';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const NotificationPage = () => {

    const firstTab = NOTIFICATION_TABS[0].index;

    const [styleContext, setStyleContext] = useContext(StyleContext);
    const [currentTab, setCurrentTab] = useState(firstTab);

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
        }
    }

    const changeTab = newTabIndex => {
        setCurrentTab(newTabIndex);
    }


    return (
        <Container sx={{ ...style.mainContainer }} maxWidth={false}>
            <Tabs value={currentTab} onChange={({target : { value }}) => {
                changeTab(value);
            }} >
                {
                    NOTIFICATION_TABS.map(tab => {
                        return <Tab label={tab?.name} />
                    })
                }
            </Tabs>

        </Container>
    );
}

export default NotificationPage;