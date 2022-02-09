import React, { useState, useContext } from 'react';
import Drawer from '@mui/material/Drawer';
import theme from "../Styling/DarkTheme";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import Slider from '@mui/material/Slider';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { StyleContext } from "../Contexts/StyleContext";

const Sidebar = () => {

    const [styleContext, setStyleContext] = useContext(StyleContext);
    const [open, setOpen] = useState(true);
    const smallSidebarWidth = 100;
    const expandedSidebarWidth = 250;

    const styles = {
        icon: {
            color: theme.palette.primary.main,
            fontSize: 40
        },
        textSlider: {
            color: theme.palette.primary.main,
            width: "70%"
        },
        drawerContainer: {
            backgroundColor: theme.palette.backgroundSecondary.main,
            color: theme.palette.textMain.main,
            width: open ? expandedSidebarWidth : smallSidebarWidth,
            overflow: "hidden"
        }
    }


    
    const openDrawer =
        <>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <Avatar />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemText primary="LlanellaWhatCake" />
            </ListItem>

            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <TextFieldsIcon sx={{
                            ...styles.icon
                        }} />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemText primary="Change Font size" />
            </ListItem>
            <Slider
                defaultValue={30}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={70}
                sx={{
                    ...styles.textSlider
                }}
            />
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <NightlightIcon sx={{
                            ...styles.icon
                        }} />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemText primary="Toggle Light/Dark Mode" />
            </ListItem>

        </>;

    const closedDrawer =
        <>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <Avatar />
                    </ListItemIcon>
                </ListItemButton>
            </ListItem>

            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <TextFieldsIcon sx={{
                            ...styles.icon
                        }} />
                    </ListItemIcon>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <NightlightIcon sx={{
                            ...styles.icon
                        }} />
                    </ListItemIcon>
                </ListItemButton>
            </ListItem>
        </>
        ;

    const toggleDrawer = open => {
        setOpen(open);

        if (open) {
            setStyleContext({...styleContext, sidebarWidth: expandedSidebarWidth});
        } else {
            setStyleContext({...styleContext, sidebarWidth: smallSidebarWidth});
        }
    }

    useState(() => {
        //default to open in context
        setStyleContext({...styleContext, sidebarWidth: expandedSidebarWidth});
    }, [])
    

    return (
        <Drawer variant="permanent"
            open={open}
            anchor="right"
            PaperProps={{
                sx: {
                    ...styles.drawerContainer
                }
            }}>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            {open ? <ChevronRightIcon onClick={() => { toggleDrawer(false) }} sx={{
                            ...styles.icon
                        }} /> :
                                <ChevronLeftIcon onClick={() => { toggleDrawer(true) }} sx={{
                                    ...styles.icon
                                }} />}
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                {open ? openDrawer : closedDrawer}
            </List>


        </Drawer>
    );
}

export default Sidebar;
