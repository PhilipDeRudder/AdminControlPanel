
import React, { useState } from 'react';
import Container from '@material-ui/core/container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import fire from '../helpers/db';
import app from "firebase/app";
import "firebase/firestore";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      background: 'skyblue',
      margin: theme.spacing(0.5),
    },
    },
    button: {
      margin: theme.spacing(0.5),
  }
}))


const db = app.firestore();

const saveMenuInFirestore = (Menus) => {
  db.collection("Testing").doc("Testing").set({
    Menus
  });
}



const MenuCreation =(props) => {
  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    { lunchName: '', allergenName: '', availability: '', askKitchen: '', Price: '', },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveMenuInFirestore(inputFields);
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (index, event ) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
    }

    const handleAddFields = () => {
      setInputFields([...inputFields, {lunchName: '', allergen: '', askKitchen: '', availability: '', Price: '' }])
    }
    const handleRemoveFields = (index) => {
      const values = [...inputFields];
      values.splice(index, 1);
      setInputFields(values);
    }

  return (
    <Container>
      <h1>Menu for the Day</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        {inputFields.map((setInputField, index) => (
          <diV key={index}>
            <TextField
              name="lunchName"
              label="Lunch Name"
              variant='filled'
              value={inputFields.lunchName}
              onChange={event => handleChangeInput(index, event)}
            />
            <TextField
              name="allergenName"
              label="Alleregens"
              variant='filled'
              value={inputFields.allergen}
              onChange={event => handleChangeInput(index, event)}
            />
            <TextField
              name="askKitchen"
              label="Ask from kitchen"
              variant='filled'
              value={inputFields.kitchen}
              onChange={event => handleChangeInput(index, event)}
            />
            <TextField
              name="availability"
              label="Availability"
              variant='filled'
              value={inputFields.availability}
              onChange={event => handleChangeInput(index, event)}
            />
            <TextField
              name="Price"
              label="Price"
              variant='filled'
              value={inputFields.price}
              onChange={event => handleChangeInput(index, event)}
            />
            <IconButton
             onClick={() => handleRemoveFields(index)}
            >
              <RemoveIcon />
            </IconButton>
            

          </diV>
        )) }
        <IconButton
             onClick={() => handleAddFields()}
            >
              <AddIcon />
            </IconButton>
        <Button 
        className={classes.button}
        variant="contained" 
        color="primary" 
        type="submit" 
        endIcon={<SaveIcon>save</SaveIcon>}
        onClick={handleSubmit}
        >Save </Button>
        
      </form>
    </Container>

  );
}



export default MenuCreation;