import React, { useState, useContext } from 'react';
import Drawer from '@mui/material/Drawer';
// import theme from "../Styling/DarkTheme";
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
import Typography from '@mui/material/Typography';

const Sidebar = () => {

    const [styleContext, setStyleContext] = useContext(StyleContext);
    const [open, setOpen] = useState(true);
    const smallSidebarWidth = 100;
    const expandedSidebarWidth = 350;

    const styles = {
        icon: {
            color: styleContext.theme.palette.primary.main,
            fontSize: 40
        },
        textSlider: {
            color: styleContext.theme.palette.primary.main,
            width: "70%"
        },
        drawerContainer: {
            backgroundColor: styleContext.theme.palette.backgroundSecondary.main,
            color: styleContext.theme.palette.textMain.light,
            width: open ? expandedSidebarWidth : smallSidebarWidth,
            overflow: "hidden"
        },
        menuLabel: {
            fontSize: styleContext.theme.fontGeneralSize.size
        }
    }

    const changeFontSize = (newSize) => {
        setStyleContext({...styleContext, 
            theme: {
                ...styleContext.theme,
                fontGeneralSize: {
                    ...styleContext.theme.fontGeneralSize,
                    size: newSize
                }
            }});
    }


    
    const openDrawer =
        <>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <Avatar />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemText primary={
                    <Typography sx={{
                        ...styles.menuLabel
                    }}>
                        LlanellaWhatCake
                    </Typography>
                } />
            </ListItem>

            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <TextFieldsIcon sx={{
                            ...styles.icon
                        }} />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemText primary={
                    <Typography sx={{
                        ...styles.menuLabel
                    }}>
                        Change Font Size
                    </Typography>
                } />
            </ListItem>
            <Slider
                defaultValue={30}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={50}
                sx={{
                    ...styles.textSlider
                }}
                onChange={({ target: { value }}) => {
                    changeFontSize(value);
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
                <ListItemText primary={
                    <Typography sx={{
                        ...styles.menuLabel
                    }}>
                        Toggle Light/Dark Mode
                    </Typography>
                } />
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
