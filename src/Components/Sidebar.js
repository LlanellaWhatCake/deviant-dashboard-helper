import React, { useState } from 'react';
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

const Sidebar = () => {

    const styles = {
        icon: {
            color: theme.palette.primary.main,
            fontSize: 40
        },
        textSlider: {
            color: theme.palette.primary.main,
            width: "70%"
        }
    }


    const [open, setOpen] = useState(false);
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

    const toggleDrawer = openClosed => {
        setOpen(openClosed);
    }

    return (
        <Drawer variant="permanent"
            open={open}
            anchor="right"
            PaperProps={{
                sx: {
                    backgroundColor: theme.palette.backgroundSecondary.main,
                    color: theme.palette.textMain.main
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
