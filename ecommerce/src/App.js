import React, { useState } from 'react'
import "./index.css";
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import Recommended from './Components/Recommended';
import Sidebar from './Components/Sidebar';
import products from './db/data';
import Card from './Components/Card';


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // Input Filter




  const handleinputChange = event => {
    setQuery(event.target.value);
  };

  const filtereditems = products.filter(product =>
     product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
    -1
     );


  // ............Radiofilter........
  const handleChange = event => {
    setSelectedCategory(event.target.value);
  }


  // ............Buttonfilter........
  const handleClick = event => {
    setSelectedCategory(event.target.value);
  }


  function filterData(products, selected, query) {
    let filterProducts = products;



    // Filtering input items
    if (query) {
      filterProducts = filtereditems;
    }


    // SelectedFilter
    if (selected) {
      filterProducts = filterProducts.filter(({ category, color, company, newPrice, title }) => 
      category === selected ||
       color === selected || 
       company === selected ||
        newPrice === selected ||
         title === selected
         );
    }

    return filterProducts.map(({img,title,star,reviews,newPrice,prevPrice}) =>(
      <Card key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice={newPrice}
      prevPrice={prevPrice}
      
      
      
      
      />

    ))
  }
 const result= filterData(products,selectedCategory,query);


  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <Navbar query={query}handleinputChange={handleinputChange}/>
      <Recommended handleClick={handleClick} />
      <Products result={result} />



    </div>
  );
}

export default App;