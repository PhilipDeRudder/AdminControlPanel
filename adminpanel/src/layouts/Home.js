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
                <div style={styles.title}>
                    <text>Restaurant Admin Panel bla bla bla</text>
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
       width:'100%',
       height:'80%'

    },
    footer:{
        width:'100%',
        height: '300',
        backgroundColor: 'blue'
        
    },
    title:{
        color:'white',
        }
};