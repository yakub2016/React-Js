import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { FaEdit } from "react-icons/fa";




export default function Home() {
  const [users, setUsers] = useState([]);


  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3000/user");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/user/${id}`);
    loadUsers();
  }

  return (
    
    <div className="container">
  
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">PhoneNumber</th>
              <th scope="col">Address</th>
              <th scope="col">Batch</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody >
           { users.map((user, index) => (
              <tr>
                <th scope="row">
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phonenumber}</td>
                <td>{user.address}</td>
                <td>{user.batch}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    <IoMdEye to={`/viewuser/${user.id}`} />
                  </Link>
                  
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                   <FaEdit />
                  </Link>
                  {/* <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button> */}
                  <MdDelete  onClick={() => deleteUser(user.id)}  style={{color:"red",width:"20px",height:"20px"}}/>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}