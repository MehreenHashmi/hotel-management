import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function ContainerInsideExample() {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Hotels</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/reviews">Reviews </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Services </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact </Link>
        </li>


      </ul>
      <form className="d-flex" role="search">
    
        <Link to ='/login'><button className="btn btn-outline-primary" type="submit">Login</button> </Link>
        <Link to ='/register'><button className="btn btn-outline-primary" type="submit">Register</button> </Link>
      </form>
    </div>
  </div>
</nav>

  );
}

export default ContainerInsideExample;