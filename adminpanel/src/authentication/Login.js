/* eslint-disable no-undef */
import React, { useState } from 'react';
import {Container, CssBaseline, Avatar, Typography, FormControlLabel, 
    Button, Checkbox, Grid, Link, makeStyles, Card, CardContent} from '@material-ui/core';
//import {Height, LockRounded} from '@material-ui/icons';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import fire from '../helpers/db';
import {ToastContainer, toast} from 'react-toastify';
import {ScaleLoader} from 'react-spinners';
import Logo from "../images/adminlogo.PNG";
import { InputAdornment } from "@material-ui/core";
import { AiFillMail } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";




export default function Login (props)  {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberme, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isLoginDisabled, setIsLoginDisabled] = useState(true);


  
    const validateEmail = text => /@/.test(text);


    // eslint-disable-next-line react-hooks/exhaustive-deps
    const validateForm = () => {
        setIsLoginDisabled(password.length < 8 || !validateEmail(email));
      }

      
    React.useEffect(() => {
        validateForm();
      }, [email, password, validateForm]);
    
    const override = `
        display: block;
        margin-left: 100px;
        border-color: red;
    `;


    //setting const values onchange
    const handleEmail= (event) =>{
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }


    

    const handleCheck = (event) => {
        setRememberMe(event.target.checked);
    }

    const handlerLogin = () => {
        setLoading(true);
        fire.auth()
            .signInWithEmailAndPassword(email, password)
            .then(response => {
                const {user} =  response;
                const data = {
                    userId: user.uid,
                    email: user.email
                }
                localStorage.setItem('user', JSON.stringify(data));
                const storage = localStorage.getItem('user');
                const loggedInUser = storage !== null ? JSON.parse(storage) : null;
                props.loggedIn(loggedInUser);
                setLoading(false);
            }).catch(error => {
                toast.error(error.message);
                setLoading(false);
            });

    }

    return (
        <Container component="main" maxWidth="xs" style={{ height: '100%', width:'100%' }}>
            <Card className={classes.card}>
                <CardContent>
                    <ToastContainer/>
                    <CssBaseline/>
                    <div className={classes.paper}>
                        
                           <img src={Logo} alt="logo" className={classes.avatar}/>
                      
                        <Typography component="h1" variant="h5">
                            Resto Panel
                        </Typography>
                        <ValidatorForm 
                            onSubmit={handlerLogin}
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
                         autoComplete='off' />

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
                                errorMessages={['this field is required']}
                                autoComplete="off"
                            />
                        <FormControlLabel
                            control={<Checkbox value={rememberme} onChange={(e) => handleCheck(e)}  color="primary" />}
                            label="Remember me"
                        />
                        {loading ? (
                            <ScaleLoader
                            css={override}
                            size={150}
                            color={"#eb4034"}
                            loading={loading}/>
                        ) : (
                             <Button
                             type="submit"
                             fullWidth
                             variant="contained"
                             className={classes.submit}
                             disabled={isLoginDisabled}

                         >
                             Sign In
                         </Button>
                        )}
                        
                            <Grid container>
                                <Grid item>
                                    <Link  onClick={props.toggle} className={classes.pointer} variant="body2">
                                        {"Don't have an account? Create an account"}
                                    </Link>
                                    <br></br>
                                    <Link  onClick={props.toggle} className={classes.pointer} variant="body2">
                                        {"Forgot password"}
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
        color: '#b89c84',
      },
      avatar: {
        width:'40%',
        height:'40%',
        marginBottom:20
        
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
}));