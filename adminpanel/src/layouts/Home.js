/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Container, CssBaseline, Avatar, Typography, FormControlLabel, Button, Checkbox, Grid, makeStyles, Card, CardContent } from '@material-ui/core';
import background from '../images/backgroundLogin.png'




export default function Home(props) {


    React.useEffect(() => {
    }, []);



    return (
        <div style={styles.container}>
            <main style={styles.main}>
                <div style={styles.titleBox}>
                    <text style={styles.title}>Restaurant Admin Panel bla bla bla</text>
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
        height: '100vh',
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
    titleBox : {
        position: 'absolute',
        width: 400,
        height:300,
        marginTop:500,
        marginLeft: 250
    },
    title: {
        position: 'absolute',
        color: 'white',
        fontFamily: "simplifica",
        fontWeight: 'normal',
        fontSize:50,
    }
}