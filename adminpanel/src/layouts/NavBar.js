import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, makeStyles } from '@material-ui/core';
//import classes from '*.module.css';
import { AccountCircle } from '@material-ui/icons';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';


const NavBar = (props) => {

    const classes = useStyles();
    const [auth, setauth] = React.useState(true);
    const [anchorEl, setanchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [dateValue, setdateValue] = useState(null)


    const handleMenu = (event) => {
        setanchorEl(event.currentTarget)
    }

    const handleClose = () => {
        localStorage.removeItem('user');
        props.setUserState();
        setanchorEl(null);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.menubackgroud}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Admin Pannel
                </Typography>
                    {auth && (
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <div style={{
                width: 500, height: 50, marginTop: 20, marginLeft: 500
            }}>
                <DateTimePickerComponent
                    id="datetimepicker"
                    placeholder="Choose a date and time"
                    format="dd-MMM-yy HH:mm"
                    step={60}
                    value={dateValue}></DateTimePickerComponent>
            </div>
        </div>

    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menubackground: {
        background: 'linear-gradient(45deg, #FE6B8B 90%)',
    },
    title: {
        flexGrow: 1
    }
}));

export default NavBar;