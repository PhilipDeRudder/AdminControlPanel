import React from 'react';
import {useState} from "react";
import fire from '../helpers/db';
import app from "firebase/app";
import "firebase/firestore";

 const MenuCreation = (props) => {
  const db = app.firestore();

const saveMenuInFirestore = (Menus) => {
  db.collection("Testing").doc("Testing").set({
    Menus
  });
}



const [inputField, setInputfield] = useState([
  {lunchName: '', askKitchen: '', allergens:'', availability: '', price:''}
]);

const handleSubmit = (e) => {
  e.preventDefault();
  saveMenuInFirestore(inputField);
  console.log("InputFields", inputField);
}

const handleAddfields = () => {
  setInputfield([...inputField, {lunchName: '', askKitchen: '', allergens:'', availability:'', price:'',}])
}

const handleRemoveFields = (index) => {
  const values = [...inputField];
  values.splice(index, 1);
  setInputfield(values);
}

const handleChangeInput = (index, event) => {
  const values = [...inputField];
  values[index][event.target.name] = event.target.value;
  setInputfield(values);
  console.log(index, event.target.name)
}

  return (
    <form style={{margin:'50px'}} onSubmit={handleSubmit}>
    <h1>Days menu</h1>
    { inputField.map((inputField, index)=>(
      <div key={index}>
        <input type="text"
        name="lunchName"
        placeholder="Lunch name"
        value={inputField.lunchName}
        onChange={event => handleChangeInput(index, event)}/>
        
        <select name="allergens"
         value={inputField.allergens}
         onChange={event => handleChangeInput(index, event)}>
           <option>1</option>
           <option>2</option>
         </select>

        <input type="text"
        name="askKitchen"
        placeholder="Ask from kitchen"
        value={inputField.askKitchen}
        onChange={event => handleChangeInput(index, event)} />
        
        <input type="number"
        name="availability"
        placeholder="availability"
        value={inputField.availability}
        onChange={event => handleChangeInput(index, event)} />
        
        <input type="text"
        name="Price"
        placeholder="Price"
        value={inputField.price}
        onChange={event => handleChangeInput(index, event)} />
        

        <button onClick={() => handleRemoveFields(index)}>remove</button>
        <button onClick={() => handleAddfields()}>add</button>
      </div>
    ))}
    <button onClick={handleSubmit}>save</button>
    </form>
  );
}

export default MenuCreation;