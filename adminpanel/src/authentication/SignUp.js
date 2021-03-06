/* eslint-disable react/jsx-no-undef */

import React, { useEffect, useState } from 'react';
import {
    Container, CssBaseline, Typography,
    Button, Grid, makeStyles, Card, CardContent
} from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import fire from '../helpers/db';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from "../images/adminlogo.png";
import app from "firebase/app";
import "firebase/firestore";
import { InputAdornment} from "@material-ui/core";
import {  Avatar, FormControlLabel, Checkbox} from '@material-ui/core';
import { FaUserAlt } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";
import { MdRestaurant } from "react-icons/md";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


export default function SignUp(props) {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [restaurantname, setRestaurantname] = useState('');
    const [fullname, setFullname] = useState('');
    const [termsConditions, settermsConditions] = useState(false);

    const currentuser = fire.auth().currentUser;
    const db = app.firestore();



    const createUserInFirestore = (_email, _restaurantName, _fullname) => {
        db.collection("Users").doc(fire.auth().currentUser.uid).set({
            _email, _restaurantName, _fullname
        });

    }


    const handleCheck = (event) => {
        settermsConditions(event.target.checked);
    }
    const error = [termsConditions].filter((v) => v).length !== 1;

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPassowerd = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleRestaurantName = (event) => {
        setRestaurantname(event.target.value);
    }

    const handleFullname = (event) => {
        setFullname(event.target.value);
    }

    //in signup add menu collection tab to firestore

    const handleSignUp = () => {
        fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(response => {
                if (response) {
                    createUserInFirestore(email, restaurantname, fullname, currentuser.uid);
                    toast.success('User Registered Successfully');
                    // write users ID into the firestore 
                }
            }).catch((error) => {
                // eslint-disable-next-line default-case
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        toast.error(error.message);
                        break;
                    case 'auth/invalid-email':
                        toast.error(error.message);
                        break;
                    case 'auth/weak-password':
                        toast.error(error.message);
                        break;
                }
            });
    }

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== password) {
                return false;
            }
            return true;
        });

        ValidatorForm.addValidationRule('lengthName', (value) => {
            if (value.length > 30) {
                return false;
            }
            return true;
        });
        ValidatorForm.addValidationRule('containsNumber', (value) => {
            const regex = /\d/;
            if (regex.test(value)) {
                return false;
            }
            return true;
        });

        return () => {
            ValidatorForm.removeValidationRule('isPasswordMatch');
            ValidatorForm.removeValidationRule('lengthName');

        }
    }, [password])

    return (
        <Container component="main" maxWidth="xs">
            <Card className={classes.card}>
                <CardContent>
                    <ToastContainer />
                    <CssBaseline />
                    <div className={classes.paper}>
                        <img src={Logo} alt="logo" className={classes.avatar} />

                        <Typography component="h1" variant="h5">
                            Register
                        </Typography>
                        <ValidatorForm
                            onSubmit={handleSignUp}
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
                                name="Full name"
                                value={fullname}
                                type="text"
                                validators={['required', 'containsNumber']}
                                errorMessages={['This field is required', "Cannot contain a number"]}
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
                                errorMessages={['This field is required', 'Email is not valid']}
                                autoComplete='off'
                            />
                            <br />
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Restaurant name"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MdRestaurant />
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={handleRestaurantName}
                                name="Restaurant name"
                                value={restaurantname}
                                validators={['required', 'lengthName']}
                                errorMessages={['This field is required', 'Maximum character exceeded']}
                                autoComplete='off'
                            />
                            <br />
                            <TextValidator
                                variant="outlined"
                                fullWidth
                                label="Password"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AiFillLock />
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={handlePassword}
                                name="password"
                                type="password"
                                value={password}
                                validators={['required']}
                                errorMessages={['This field is required']}
                                autoComplete="off"
                            />
                            <br />
                            <TextValidator
                                variant="outlined"
                                label="Confirm password"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AiFillLock />
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth
                                onChange={handleConfirmPassowerd}
                                name="confirmPassword"
                                type="password"
                                validators={['isPasswordMatch', 'required']}
                                errorMessages={["Passwords don't match", 'This field is required']}
                                value={confirmPassword}
                                autoComplete="off"
                            />
                      

                                <FormControlLabel
                                    control={
                                    <Checkbox
                                         value={termsConditions} 
                                    onChange={(e) => handleCheck(e)} color="primary" 
                                    required={true}/>}
                                    label="I've read the terms and conditions"
                                />
                            
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className={classes.submit}
                            >
                                <p>Create Account</p>
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link to='/login' className={classes.pointer} variant="body2">
                                        {"Already have an account? Sign In"}
                                    </Link>
                                </Grid>
                            </Grid>
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
    }
}))
