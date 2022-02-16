import React, { useContext, useState } from 'react';
import DashboardCard from "../Components/DashboardCard";
import { StyleContext } from "../Contexts/StyleContext";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NOTIFICATION_TABS } from '../StaticData/NotificationTabs';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import NotificationMenuBar from '../Components/NotificationMenuBar';
import { Notification } from '../Components/Notification';


const NotificationPage = () => {

    const firstTab = NOTIFICATION_TABS[0].index;

    const [styleContext, setStyleContext] = useContext(StyleContext);
    const [currentTab, setCurrentTab] = useState(firstTab);

    const testNotifs = ["test", "hi", "testing", "oi", "lol", "test", "hi", "testing", 
    "oi", "lol", "test", "hi", "testing", "oi", "lol", "test", "hi", "testing", "oi", "lol", "test", "hi", "testing", "oi", "lol"];

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
        mainBox: {
            background: styleContext.theme.palette.backgroundSecondary.main,
            padding: "20px 20px 20% 20px",
            height: "100%"
        },
        tabInner: {
            display: "flex"
        }
    }

    const changeTab = (evt, newTabIndex) => {
        setCurrentTab(newTabIndex);
    }

    const TabPanel = (props) => {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
        ({ theme }) => ({
          textTransform: 'none',
          fontWeight: theme.typography.fontWeightRegular,
          fontSize: styleContext.theme.fontSize.medium,
          top: "10px",
          borderRadius: "15px 15px 0 0",
          color: 'rgba(255, 255, 255, 0.7)',
          margin: "0 0 0 7px",
          backgroundColor: styleContext.theme.palette.backgroundSecondary.main,
          '&.Mui-selected': {
            color: '#fff',
            backgroundColor: styleContext.theme.palette.primary.main,
            boxShadow: `10px 0px 10px ${styleContext.theme.palette.primary.main}`,
            top: 0
          },
          '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
          },
        }),
      );


    return (
        <Container sx={{ ...style.mainContainer }} maxWidth={false}>
            <Tabs value={currentTab} onChange={changeTab} >
                {
                    NOTIFICATION_TABS.map(tab => {
                        return <StyledTab label={<div style={{ ...style.tabInner}}>
                        <Chip label="4" />
                        {tab?.name}
                        </div>
                            

                        } />
                    })
                }
            </Tabs>
            <Box sx={{
                ...style.mainBox,
                width: `calc(100% - ${styleContext.sidebarWidth + 100}px)`
            }}>
                <NotificationMenuBar />
                {
                    NOTIFICATION_TABS.map(tab => {
                        return <TabPanel index={tab?.index} value={currentTab}>
                            Notifs for {tab?.name} section!
                            {
                                testNotifs.map(notif => {
                                    return <Notification />;
                                })
                            }
                            
                        </TabPanel>
                    })
                }

            </Box>


        </Container>
    );
}

export default NotificationPage;