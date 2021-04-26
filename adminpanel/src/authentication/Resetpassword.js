/* eslint-disable no-undef */
import React, { useState } from 'react';
import {
    Container, CssBaseline, Avatar, Typography, FormControlLabel,
    Button, Checkbox, Grid, Link, makeStyles, Card, CardContent
} from '@material-ui/core';
//import {Height, LockRounded} from '@material-ui/icons';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import fire from '../helpers/db';
import { ToastContainer, toast } from 'react-toastify';
import { ScaleLoader } from 'react-spinners';
import Lock from "../images/lock.jpg";


export default function Resetpassword(props) {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);





    // eslint-disable-next-line react-hooks/exhaustive-deps


    React.useEffect(() => {
    }, [email]);

    const override = `
        display: block;
        margin-left: 100px;
        border-color: red;
    `;


    //setting const values onchange
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }





    const handleReset = () => {
        setLoading(true);
        fire.auth().sendPasswordResetEmail(email)
            .then(function () {
                alert('Please check your email...')
                setLoading(false);
                setEmail('');
            }).catch(function (e) {
                console.log(e)
                toast.error(error.message);
                setLoading(false);
            });
    }



    return (
        <Container component="main" maxWidth="xs" style={{ height: '100%', width: '100%' }}>
            <Card className={classes.card}>
                <CardContent>
                    <ToastContainer />
                    <CssBaseline />
                    <div className={classes.paper}>

                        <img src={Lock} alt="logo" className={classes.avatar} />

                        <Typography component="h1" variant="h5">
                            RESET PASSWORD
                        </Typography>
                        <ValidatorForm
                            onSubmit={handleReset}
                            onError={errors => {
                                for (const err of errors) {
                                    console.log(err.props.errorMessages[0])
                                }
                            }}
                            className={classes.form}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Email"
                                onChange={handleEmail}
                                name="email"
                                value={email}
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                                autoComplete='off' />

                            {loading ? (
                                <ScaleLoader
                                    css={override}
                                    size={150}
                                    color={"#eb4034"}
                                    loading={loading} />
                            ) : (
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    className={classes.submit}

                                >
                                    RESET PASSWORD
                                </Button>
                            )}

                            <Grid container>
                                <Grid item>
                                    <Link onClick={props.toggle} className={classes.pointer} variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                    <br></br>
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
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
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
}));