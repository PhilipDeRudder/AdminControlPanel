/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Container, CssBaseline, Avatar, Typography, FormControlLabel, Button, Checkbox, Grid, makeStyles, Card, CardContent } from '@material-ui/core';
import background from '../images/backgroundlarge.png'
import memberone from '../images/memberone.jpg';



export default function AboutUs(props) {


    const auboutText = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
    React.useEffect(() => {
    }, []);



    return (
        <div style={styles.container}>
            <main style={styles.main}>
                <div style={styles.titleBox}>
                    <text style={styles.title}>About us</text>
                </div>
                <div style={styles.aboutUsbox}>
                    <text style={styles.textAbout}>{auboutText}</text>
                </div>

                <div style={styles.teamTitleBox}>
                    <text style={styles.title}>Team</text>
                </div>

                <div style={styles.teamBox}>
                    <div style={styles.iconBox}>
                        <img src={memberone} style={styles.icon}></img>
                        <img src={memberone} style={styles.icon}></img>
                        <img src={memberone} style={styles.icon}></img>

                    </div>
                </div>

            </main>



        </div >
    );
}

const styles = {
    container: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '130vh',

    },
    titleBox: {
        width: 500,
        height: 200,
        margin: 'auto',
    },
    main:{
    },
    title: {
        position: 'absolute',
        color: 'white',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        fontSize: 100,
        textAlign: 'center',

    },
    text: {
        position: 'absolute',
        color: 'white',
        fontFamily: 'Montserrat',
        fontWeight: 'normal',
        fontSize: 30,
    },
    textBox: {
        position: 'absolute',
        width: 500,
        height: 200,
        marginTop: 630,
        marginLeft: 900
    },
    iconBox: {
        position: 'absolute',
        width: '80%',
        marginLeft:'10%',
        height: 100,
        margin:'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    icon: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "red"
    },
    aboutUsbox: {
        margin: 'auto',
        width: 900
    }
    ,
    textAbout: {
        color: 'white',
        margin: 'auto',
        fontFamily: 'Montserrat',
        fontWeight: 'normal',
        fontSize: 30,
    },
    teamTitleBox: {
        width: 400,
        height: 200,
        margin: 'auto',
        marginTop: 100
    }
}