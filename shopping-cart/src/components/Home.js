import '../styles/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <p className="Home-text">
        The online premium
        <br /> jewelry store
      </p>
      <Link to="/shop" className="Home-link">
        Enter
      </Link>
    </div>
  );
}

export default Home;
