
import React, { useState } from 'react';
import Container from '@material-ui/core/container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import Calendar from 'react-calendar';
import fire from '../helpers/db';
import app from "firebase/app";
import "firebase/firestore";
import TimePicker from 'react-time-picker';


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


const MenuCreation = (props) => {
  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    { lunchName: '', askKitchen: '', allergens: '', Price: '', timeserved1: '', timeserved2: '' },
  ]);
  const [date, setDate] = useState(new Date());


  const db = app.firestore();

  const saveMenuInFirestore = (Menus) => {
    db.collection("Users").doc(fire.auth().currentUser.uid).collection("menus").doc(date.toDateString()).set({
      Menus
    });
  }


  const updateDate = date => {
    setDate(date);
    console.log(date)
  }

  const updatest = (e) => {
    const value = e.target.value;
    setDate(value);
    console.log("time test:")
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    saveMenuInFirestore(inputFields);
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { lunchName: '', allergens: '', askKitchen: '', Price: '', timeserved1: '', timeserved2: '' }])
  }
  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  }

  return (
    <Container>
      <div style={{
        width: 500, height: 50, marginTop: 20, marginLeft: 500
      }}>

        <DateTimePickerComponent
          id="datetimepicker"
          placeholder="Choose a date and time"
          format="dd-MMM-yy"
          step={60}
          onChange={updatest}
          value={date}></DateTimePickerComponent>
      </div>
      <h1>Menu for the Day</h1>
      <h2>{date.toLocaleDateString()}</h2>
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
              name="allergens"
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
              name="timeserved1"
              id="time"
              label="Serving start time"
              type="time"
              defaultValue="07:30"
              value={inputFields.timeserved1}
              onChange={event => handleChangeInput(index, event)}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />

            <TextField
              name="timeserved2"
              id="time"
              label="Serving end time"
              type="time"
              defaultValue="12:00"
              value={inputFields.timeserved2}
              onChange={event => handleChangeInput(index, event)}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
           
            <TextField
              name="Price"
              label="Price"
              variant='filled'
              value={inputFields.Price}
              onChange={event => handleChangeInput(index, event)}
            />
            <IconButton
              onClick={() => handleRemoveFields(index)}
            >
              <RemoveIcon />
            </IconButton>

          </diV>
        ))}
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
