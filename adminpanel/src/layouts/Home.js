/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Container, CssBaseline, Avatar, Typography, FormControlLabel, Button, Checkbox, Grid, makeStyles, Card, CardContent } from '@material-ui/core';
import background from '../images/backgroundlarge.png'
import fast from '../images/clock.png';
import easy from '../images/easy-to-use.png';
import backbottom from '../images/backbottom.png';



export default function Home(props) {


    React.useEffect(() => {
    }, []);



    return (
        <div style={styles.container}>
            <main style={styles.main}>
                <div style={styles.titleBox}>
                    <text style={styles.title}>Restaurant Admin Panel</text>
                </div>
                <div style={styles.yeet}>
                <div style={styles.iconBox}>
                    <img src={fast} style={styles.icon}></img>
                    <img src={easy} style={styles.icon}></img>
                    <img src={easy} style={styles.icon}></img>

                </div>
                </div>
                <div style={styles.textBox}>
                    <text style={styles.text}>Here comes smart text about admin panel chillz billz </text>
                </div>
            </main>
            <footer style={styles.footer}>

            </footer>



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
    main: {
        position: 'relative',
        width: '100%',
        height: '80%'

    },
    footer: {
        width: '100%',
        height: '300',
        backgroundColor: 'blue'

    },
    titleBox: {
        position: 'absolute',
        width: 400,
        height: 200,
        marginTop: 600,
        marginLeft: 200
    },
    title: {
        position: 'absolute',
        color: 'white',
        fontFamily: 'Montserrat',
        fontWeight: 'normal',
        fontSize: 50,
        textAlign: 'center'

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
        width: 600,
        height: 100,
        marginTop: 800,
        marginLeft: '25%',
        backgroundColor:'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
        
    },
    icon: {
        width: 100,
        height: 100
    }
}