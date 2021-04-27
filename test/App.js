import React from 'react';
import {useState} from "react";
import MultiSelect from "react-multi-select-component";



 const MenuCreation = (props) => {


  
const [inputField, setInputfield] = useState([
  {lunchName: '', askKitchen: '', allergens:[], availability: '', price:'', timeserved1:'',timeserved2:''},
]);
  const options = [
    { label: "Milk", value: "milk" },
    { label: "Lactose ", value: "lactose" },
    { label: "Gluten ", value: "gluten", },
    { label: "Eggs ", value: "eggs" },
    { label: "Fish ", value: "fish" },
    { label: "Shellfish ", value: "shellfish" },
    { label: "Tree nuts ", value: "treenuts" },
    { label: "Peanuts ", value: "peanuts" },
    { label: "Wheat ", value: "wheat" },
  ];
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("InputFields", inputField);
}
const [selected, setSelected] = useState([]);
const handleAddfields = () => {
  setInputfield([...inputField, {lunchName: '', askKitchen: '', allergens:[], availability:'', price:'', timeserved1:'', timeserved2:''}])
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

        <input type="text"
        name="askKitchen"
        placeholder="Ask from kitchen"
        value={inputField.askKitchen}
        onChange={event => handleChangeInput(index, event)} />
       
        <MultiSelect
        name='allergens'
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
        
        <input type="number"
        name="availability"
        placeholder="availability"
        value={inputField.availability}
        onChange={event => handleChangeInput(index, event)} />

        <input type="text"
        name="timeserved1"
        placeholder="Serving start time"
        value={inputField.timeserved}
        onChange={event => handleChangeInput(index, event)} />
        <input type="text"
        name="timeserved2"
        placeholder="Serving end time"
        value={inputField.timeserved}
        onChange={event => handleChangeInput(index, event)} />
        
        <input type="number"
        name="price"
        placeholder="price"
        value={inputField.price}
        onChange={event => handleChangeInput(index, event)} />
        
      <h1>Select Allergens</h1>
      
      
         

        <button onClick={() => handleRemoveFields(index)}>Remove</button>
        <button onClick={() => handleAddfields()}>Add</button>
      </div>
    ))}
    <button onClick={handleSubmit}>Save</button>
    </form>
  );
}

export default MenuCreation;