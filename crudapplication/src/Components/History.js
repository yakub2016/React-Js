import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Edit from "./Update";
import FarmerService from "../services/FarmerService";


function FarmerInfo() {
  const WEBSITE_API_BASE_URL = "http://localhost:8080/api/v1/farmers";
  const navigate = useNavigate();
  // const baseURL = "http://localhost:3000";

  const [info, setInfo] = useState([]);
  console.log(info);


  // const setYakub = () => {
  //   axios.get(baseURL + "/Info").then((response) => {
  //     console.log(response.data);
  //     setInfo(response.data);

  //   }).catch(error => {
  //     alert("error occured while loading data:" + error)
  //   });
  // }
  const setYakub = () => {
    FarmerService.getFarmer(WEBSITE_API_BASE_URL).then((response) => {
      setInfo(response.data);
      console.log(response.data)
    })
  }
  useEffect(() => {
    setYakub();

  }, []);

  const yakub = (id) => {
    console.log(id);
    FarmerService.deleteFarmer(id).then((response) => {
      alert("Farmer record" + id + "deleted");
      // setInfo();  


    }).catch(error => {
      alert("Error Ocurred in removing Website:" + error);
    });
  }


  return (
    <div>
      <h2>History</h2>
      <br></br>

      <nav style={{ backgroundColor: 'black' }}>
        <button
          className="btn btn-primary nav-item active"
          onClick={() => navigate("/Booking")} style={{ marginLeft: '800px', }}>
          Create New Website

        </button>

      </nav>

      {/* <div className="col-md-8"> */}
      <h4>BookingInformaton</h4>
      <div class="card">
        <div class="card-body">
        </div>
      </div>

      <div className="tablecontainer">
        <div class="col-18">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phonenumber</th>
                <th>Address</th>
                <th>Items</th>
                <th>Quantity</th>
                <th>Weights</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody >

              {
                setInfo &&
                info.map((info, index) => (
                  <tr>
                    <th >{info.id}</th>
                    <td >{info.name}</td>
                    <td>{info.email}</td>
                    <td>{info.phone}</td>
                    <td>{info.address}</td>
                    <td>{info.items}</td>
                    <td>{info.quantity}</td>
                    <td>{info.weights}</td>



                    <td >
 




                      <i class="fa-solid fa-pen-to-square" onClick={() => navigate("/Edit/" + info.id)} style={{ marginRight: '30px' }} ></i>


                      <i class="fa-solid fa-trash" style={{ color: 'red', borderRadius: '10px' }} onClick={() => yakub(info.id)}></i>


                    </td>



                  </tr>


                ))
              }
            </tbody>
          </table>

        </div>

      </div>

    </div>
    // </div>

  );

}
export default FarmerInfo;
