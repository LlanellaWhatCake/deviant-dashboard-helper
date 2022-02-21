import React, { useState, useContext } from 'react';
import Drawer from '@mui/material/Drawer';
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
import Switch from '@mui/material/Switch';
import darkTheme from '../Styling/DarkTheme';
import lightTheme from '../Styling/LightTheme';
import { THEME_OPTIONS } from '../StaticData/ThemeOptionsList';
import LightModeIcon from '@mui/icons-material/LightMode';
import HomeIcon from '@mui/icons-material/Home';
import {
    Link
} from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

// const ipcRenderer = window.ipcRenderer;
console.log('you heifer', window, window.api)
// window.api.send("toMain", "some data");

const Sidebar = () => {

    const [styleContext, setStyleContext] = useContext(StyleContext);
    const [open, setOpen] = useState(true);
    const smallSidebarWidth = 100;
    const expandedSidebarWidth = 300;
    const fontStep = 2;
    const defaultFontSize = 20;

    const styles = {
        icon: {
            color: styleContext.theme.palette.primary.main,
            fontSize: styleContext.theme.fontSize.medium + 20
        },
        textSlider: {
            color: styleContext.theme.palette.primary.main,
            width: "150px"
        },
        drawerContainer: {
            backgroundColor: styleContext.theme.palette.backgroundSecondary.main,
            color: styleContext.theme.palette.textMain.light,
            width: open ? expandedSidebarWidth : smallSidebarWidth,
            overflow: "hidden"
        },
        menuLabel: {
            fontSize: styleContext.theme.fontSize.medium
        },
        switch: {
            color: styleContext.theme.palette.primary.main
        }
    }

    const changeFontSize = (newSize) => {
        setStyleContext({
            ...styleContext,
            theme: {
                ...styleContext.theme,
                fontSize: {
                    ...styleContext.theme.fontSize,
                    medium: newSize,
                    small: newSize - fontStep,
                    large: newSize + fontStep,
                    extraLarge: newSize + fontStep * 2
                }
            }
        });
    }

    const switchThemeMode = (isDark) => {
        let name = isDark ? THEME_OPTIONS.dark : THEME_OPTIONS.light;
        setStyleContext({
            ...styleContext,
            theme: isDark ? darkTheme : lightTheme,
            themeName: name
        });

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
                    <Link to="/">
                        <ListItemIcon>
                            <HomeIcon sx={{
                                ...styles.icon
                            }} />
                        </ListItemIcon>
                    </Link>

                </ListItemButton>
                <ListItemText primary={
                    <Typography sx={{
                        ...styles.menuLabel
                    }}>
                        Go Home
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
                    <>
                        <Typography sx={{
                            ...styles.menuLabel
                        }}>
                            Change Font Size
                        </Typography>
                    </>}
                    secondary={<>
                        <Slider
                            defaultValue={defaultFontSize}
                            valueLabelDisplay="auto"
                            step={fontStep}
                            marks
                            min={defaultFontSize - fontStep * 2}
                            max={defaultFontSize + fontStep * 2}
                            sx={{
                                ...styles.textSlider
                            }}
                            onChange={({ target: { value } }) => {
                                changeFontSize(value);
                            }}

                        />
                    </>}
                />
            </ListItem>

            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        {
                            styleContext.themeName === THEME_OPTIONS.dark ? <NightlightIcon sx={{
                                ...styles.icon
                            }} /> :
                                <LightModeIcon sx={{
                                    ...styles.icon
                                }} />
                        }

                    </ListItemIcon>
                </ListItemButton>
                <ListItemText primary={
                    <Typography sx={{
                        ...styles.menuLabel
                    }}>
                        Toggle Light/Dark Mode
                    </Typography>
                }

                    secondary={
                        <Switch checked={styleContext.themeName === THEME_OPTIONS.dark}
                            onChange={({ target: { checked } }) => {
                                switchThemeMode(checked);
                            }}
                            sx={{
                                ...styles.switch
                            }} />
                    }
                />
            </ListItem>

            <ListItem>
                <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon sx={{
                                ...styles.icon
                            }} 
                            onClick={() => {
                                window.api.send('logout');
                            }}
                            />
                        </ListItemIcon>

                </ListItemButton>
                <ListItemText primary={
                    <Typography sx={{
                        ...styles.menuLabel
                    }}>
                        Logout
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
                    <Link to="/">
                        <ListItemIcon>
                            <HomeIcon sx={{
                                ...styles.icon
                            }} />
                        </ListItemIcon>
                    </Link>
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
                        {
                            styleContext.themeName === THEME_OPTIONS.dark ? <NightlightIcon sx={{
                                ...styles.icon
                            }} /> :
                                <LightModeIcon sx={{
                                    ...styles.icon
                                }} />
                        }
                    </ListItemIcon>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <Link to="/">
                        <ListItemIcon>
                            <LogoutIcon sx={{
                                ...styles.icon
                            }} />
                        </ListItemIcon>
                    </Link>

                </ListItemButton>
            </ListItem>
        </>
        ;

    const toggleDrawer = open => {
        setOpen(open);

        if (open) {
            setStyleContext({ ...styleContext, sidebarWidth: expandedSidebarWidth });
        } else {
            setStyleContext({ ...styleContext, sidebarWidth: smallSidebarWidth });
        }
    }

    useState(() => {
        //default to open in context
        setStyleContext({ ...styleContext, sidebarWidth: expandedSidebarWidth });
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
