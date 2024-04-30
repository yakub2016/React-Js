import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import FarmerService from '../services/FarmerService';


const Edit =props =>{
    const baseURL="http://localhost:3000";
    // const WEBSITE_API_BASE_URL = "http://localhost:8080/api/v1/farmers";
    const navigate=useNavigate();
    const{id}=useParams();

    const[currentName,setcurrentName]=useState('');
    const[currentEmail,setcurrentEmail]=useState('');
    const[currentPhoneNumber,setcurrentPhoneNumber]=useState('');
    const[currentAddress,setcurrentAddress]=useState('');
    const[currentItems,setcurrentItems]=useState('');
    const[currentQuantity,setcurrentQuantity]=useState('');
    const[currentWeights,setcurrentweights]=useState('');


    const getYakubData=()=>{
        axios.get(baseURL +"/user/"+ id)
        .then((response)=>{
            
            const setnewdata = response.data;
           setcurrentName(setnewdata.name);
            setcurrentEmail(setnewdata.email);
            setcurrentPhoneNumber(setnewdata.phone);
            setcurrentAddress(setnewdata.address);
            setcurrentItems(setnewdata.items);
            setcurrentQuantity(setnewdata.quantity);
            setcurrentweights(setnewdata.weights);
       
        }).catch(error =>{
            alert("error occured whle loading data:" +error);
        });
    }

    // const getYakubData=()=>{
    //     FarmerService.getFarmer(WEBSITE_API_BASE_URL +id,).then((response)=>{
    //                   const setnewdata = response.data;
    //        setcurrentName(setnewdata.name);
    //         setcurrentEmail(setnewdata.email);
    //         setcurrentPhoneNumber(setnewdata.phone);
    //         setcurrentAddress(setnewdata.address);
    //         setcurrentItems(setnewdata.items);
    //         setcurrentQuantity(setnewdata.quantity);
    //         setcurrentweights(setnewdata.weights);
    //     });
        
    // }



    const submitActionHandler=(event)=>{
        event.preventDefault();
        axios.put(baseURL +"/user/" +id,{ 
            name:currentName,
            email:currentEmail,
            phone:currentPhoneNumber,
            address:currentAddress,
            items:currentItems,
            quantity:currentQuantity,
            weights:currentWeights
        })
        .then((response)=>{
            alert("Booking updated!");
            navigate("/")
        }).catch(error =>{
            alert("error===" +error);
        });
    };

    useEffect(()=>{
        if(id)
        getYakubData();
    },[id]);

    const NameChangeHandler=(event)=>{
        setcurrentName(event.target.value);
    };

    const EmailChangeHandler=(event)=>{
        setcurrentEmail(event.target.value);
    };

    const PhoneNumberChangeHandler=(event)=>{
        setcurrentPhoneNumber(event.target.value);
    };

    const AddressChangeHandler=(event)=>{
        setcurrentAddress(event.target.value);
    };

    const ItemsChangeHandler=(event)=>{
        setcurrentAddress(event.target.value);
    };

    const QuantityChangeHandler=(event)=>{
        setcurrentQuantity(event.target.value);
    };

    const WeightsChangeHandler=(event)=>{
        setcurrentweights(event.target.value);
    };


    





return(

    <div class="container my-5">
    <h1>Booking Form</h1>
    <form onSubmit={submitActionHandler} style={{border:'3px solid black',background:'pink',}}> 

    
       <div class="form-group">
        <label for="name" style={{marginRight:'60px'}}><b>Name</b></label>
        <input type="text" class="form-control"  placeholder="Enter your name"  value={currentName} onChange={NameChangeHandler} required />
      </div>

    
      <div class="form-group">
        <label for="email"> <b>Email</b></label>
        <input type="email" class="form-control"  placeholder="Enter your email" value={currentEmail} onChange={EmailChangeHandler} required />
      </div> 

    
       <div class="form-group">
        <label for="check-in-date"><b>Phonenumber</b></label>
        <input type="text" class="form-control"  placeholder="PhoneNumber"value={currentPhoneNumber} onChange={PhoneNumberChangeHandler}  required  />
      </div> 


       <div class="form-group">
        <label for="check-out-date"><b>Address</b></label>
        <input type="text" class="form-control" placeholder='Address' value={currentAddress} onChange={AddressChangeHandler} required />
      </div> 

 
       <div class="form-group">
        <label for="num-guests"><b>Items</b></label>
        <input type="text" class="form-control" placeholder='Items' value={currentItems} onChange={ItemsChangeHandler}  required/>
      </div> 
      <div class="form-group">
        <label for="num-guests"><b>Quantity</b></label>
        <input type="text" class="form-control" placeholder='Quantity' value={currentQuantity} onChange={QuantityChangeHandler} required/>
      </div> 
      <div class="form-group">
        <label for="num-guests"><b>Weights</b></label>
        <input type="text" class="form-control" placeholder='weights' value={currentWeights} onChange={WeightsChangeHandler}  required/>
      </div> 
      <button className="btn btn-success"style={{background:'bluess'}} >Update</button>
     <button className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancel</button>
                    

      
    </form>
  </div>
  
    );
}
export default Edit;
