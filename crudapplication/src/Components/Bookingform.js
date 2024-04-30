import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import FarmerService from '../services/FarmerService';



const Book = () => {
  // const baseURL="http://localhost:3000/Info";
  const navigate = useNavigate();

  const [enteredName, setName] = useState('');
  const [enteredEmail, setEmail] = useState('');
  const [enteredPhoneNumber, setPhoneNumber] = useState('');
  const [enteredAddress, setAddress] = useState('');
  const [enteredItems, setItems] = useState('');
  const [enteredQuantity, setQuantity] = useState('');
  const [enteredWeights, setWeights] = useState('');


  const NameChangeHandler = (event) => {
    setName(event.target.value);
  }

  const EmailChangeHandler = (event) => {
    setEmail(event.target.value);
  }
  const PhoneNumberChangeHandler = (event) => {
    setPhoneNumber(event.target.value);
  }
  const AddressChangeHandler = (event) => {
    setAddress(event.target.value);
  }
  const ItemsChangeHandler = (event) => {
    setItems(event.target.value);
  }
  const QuantityChangeHandler = (event) => {
    setQuantity(event.target.value);
  }
  const WeightsChangeHandler = (event) => {
    setWeights(event.target.value);
  }



  // const submitActionHandler=(event)=>{
  //     console.log(enteredName, enteredEmail,enteredPhoneNumber, enteredAddress,enteredItems ,enteredQuantity,enteredWeights)
  //     event.preventDefault();

  //     axios.post(baseURL,{
  //         name:enteredName,
  //         email:enteredEmail,
  //         phone:enteredPhoneNumber,
  //         address:enteredAddress,
  //         items:enteredItems,
  //         quantity:enteredQuantity,
  //         weights:enteredWeights
  //     })

  //         .then((response)=>{
  //             alert("website"+enteredName+"added!");
  //             navigate("/")
  //         }).catch(error=>{
  //             alert("error==" +error);

  //         });
  // };
  const submitActionHandler = (event) => {
    event.preventDefault();

    FarmerService.createFarmer({ name: enteredName,
       email: enteredEmail,
       phone: enteredPhoneNumber,
       address: enteredAddress,
       items: enteredItems, quantity: enteredQuantity, weights: enteredWeights }).then((response) => {
      alert("Website " + ":" + enteredName + ":" + enteredEmail + " added!");
      console.log(response)
      navigate("/");
    }).catch(error => {
      alert("error===" + error);
    });
  };

  const cancelHandler = () => {
    //reset the values of input fields
    setName('');
    setEmail('');
    setPhoneNumber('');
    setAddress('');
    setItems('');
    setQuantity('');
    setWeights('');



    navigate("/");

  }



  return (

    <div class="container my-5">
      <h1>Booking Form</h1>
      <form onSubmit={submitActionHandler} style={{ border: '3px solid black', background: 'pink', }}>


        <div class="form-group">
          <label for="name" style={{ marginRight: '60px' }}><b>Name</b></label>
          <input type="text" class="form-control" placeholder="Enter your name" value={enteredName} onChange={NameChangeHandler} />
        </div>


        <div class="form-group">
          <label for="email"> <b>Email</b></label>
          <input type="email" class="form-control" placeholder="Enter your email" value={enteredEmail} onChange={EmailChangeHandler} />
        </div>


        <div class="form-group">
          <label for="check-in-date"><b>Phonenumber</b></label>
          <input type="text" class="form-control" placeholder="PhoneNumber" value={enteredPhoneNumber} onChange={PhoneNumberChangeHandler} />
        </div>


        <div class="form-group">
          <label for="check-out-date"><b>Address</b></label>
          <input type="text" class="form-control" placeholder='Address' value={enteredAddress} onChange={AddressChangeHandler} />
        </div>


        <div class="form-group">
          <label for="num-guests"><b>Items</b></label>
          <input type="text" class="form-control" placeholder='Items' value={enteredItems} onChange={ItemsChangeHandler} />
        </div>
        <div class="form-group">
          <label for="num-guests"><b>Quantity</b></label>
          <input type="text" class="form-control" placeholder='Quantity' value={enteredQuantity} onChange={QuantityChangeHandler} />
        </div>
        <div class="form-group">
          <label for="num-guests"><b>Weights</b></label>
          <input type="text" class="form-control" placeholder='weights' value={enteredWeights} onChange={WeightsChangeHandler} />
        </div>
        <button className="btn btn-success" style={{ background: 'bluess' }} >Save</button>
        <button className="btn btn-danger" onClick={cancelHandler} style={{ marginLeft: "10px" }}>Cancel</button>



      </form>
    </div>

  );
}
export default Book;


