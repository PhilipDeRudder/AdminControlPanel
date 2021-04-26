/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Container, CssBaseline, Avatar, Typography, FormControlLabel, Button, Checkbox, Grid, makeStyles, Card, CardContent} from '@material-ui/core';
import background from '../images/backgroundLogin.png'




export default function Home(props) {


    React.useEffect(() => {
    }, []);



    return (
        <div style={styles.container}>
            <main style={styles.main}>

            </main>
            <footer style={styles.footer}>

            </footer>

            
          
        </div >
    );
}

const styles = {
    container: {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
    },
    main: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh'
    },
    footer:{
        width:'100%',
        height: '300',
        backgroundColor: 'blue'
        
    }
};