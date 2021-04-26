
import React, { useEffect, useState } from 'react';
import { Container, CssBaseline, Typography, Button, Grid, Link, makeStyles, Card, CardContent } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import fire from '../helpers/db';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from "../images/adminlogo.png";
import app from "firebase/app";
import "firebase/firestore";
import { InputAdornment } from "@material-ui/core";
import { FaUserAlt } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { RiMessageFill } from "react-icons/ri";
import emailjs from 'emailjs-com';
import TextareaAutosize from 'react-autosize-textarea';



export default function ContactUs(props) {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [fullname, setFullname] = useState('');

    const currentuser = fire.auth().currentUser;
    const db = app.firestore();




    const handleEmail = (event) => {
        setEmail(event.target.value);
    }


    const handleFullname = (event) => {
        setFullname(event.target.value);
    }

    const handleMessage = (event) => {
        setMessage(event.target.value);
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_agb5rln', 'template_oewm1v7', e.target, 'user_oVCV0IlK8um5LoaQURWlQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }


    useEffect(() => {

    }, [])

    return (
        <Container component="main" maxWidth="xs">
            <Card className={classes.card}>
                <CardContent>
                    <ToastContainer />
                    <CssBaseline />
                    <div className={classes.paper}>
                        <img src={Logo} alt="logo" className={classes.avatar} />

                        <Typography component="h1" variant="h5">
                            Contact Us
                        </Typography>
                        <ValidatorForm
                            onSubmit={sendEmail}
                            className={classes.form}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Full name"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FaUserAlt />
                                        </InputAdornment>
                                    ),
                                }}

                                onChange={handleFullname}
                                name="name"
                                value={fullname}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                            <br />
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Email"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AiFillMail />
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={handleEmail}
                                name="email"
                                value={email}
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                                autoComplete='off'
                            />
                            <br />
                            <h2>Message</h2>
                            <textarea 
                                rows={10}
                                cols={40} 
                                name="message"
                                inputStyle={{ fontSize: 36 }}
                                value={message}
                                onChange={handleMessage}

                            />
                            <br />
                            <Button
                                type="submit"
                                value="Send"
                                fullWidth
                                variant="contained"
                                className={classes.submit}
                            >
                                <p>Submit</p>
                            </Button>
                        </ValidatorForm>
                    </div>
                </CardContent>
            </Card>
        </Container>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#b89c84'
    },
    avatar: {
        width: '40%',
        height: '40%',
        marginBottom: 20

    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        background: 'linear-gradient(45deg, #b89c84 30%, #b89c84 90%)',
        margin: theme.spacing(3, 0, 2),
        color: '#fff',
        borderRadius: 50

    },
    card: {
        marginTop: '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingBottom: '20px',
    },
    pointer: {
        cursor: 'pointer',
        color: 'black'
    },
    textArea: {
        width: 1000,
        height: 1000
    }
}))
