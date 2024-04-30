
import './App.css';
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';


import FarmerInfo from './Components/History';
import Book from './Components/Bookingform';
import Edit from './Components/Update';
import Home from './Components/Home';

function App() {
  return (
    <Router>
    <div className="App" >
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
     
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="Home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">History</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="Booking">Bookingform</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Edit">Update</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
      
   
    <Routes>
      <Route path='/Home' element={<Home />}></Route>
      <Route  path='/' element={<FarmerInfo />}></Route>
      <Route  path='/Booking' element={<Book />}></Route>
      <Route  path='/Edit/:id' element={<Edit />}></Route>
  
    </Routes>
    </div>
    </Router>
  );
}

export default App;
