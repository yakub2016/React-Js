import React from 'react'
import "./Sidebar.css";
import Category from './Category';
import Price from './Price';
import Colors from './Colors';


function Sidebar({ handleChange }) {
  return (
    <div>
      <section className='sidebar'>
        <div className='logo-container'>
          <h1><i class="fa-sharp fa-solid fa-cart-plus"></i></h1>
        </div>

        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />

      </section>
    </div>
  );
}

export default Sidebar;