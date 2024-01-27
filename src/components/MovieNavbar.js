import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieNavBar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-dark bg-gradient   ">
  <div class="container-fluid nav justify-content-center">
    <a class="navbar-brand  text-white" href="/">   Movie Suggestor</a>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class=" " id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link " >  <Link style={{textDecoration: 'none',color:'white'}}to="/add">ADD a movie</Link></a> </li>
                {localStorage.getItem("accessToken") ? (
                  <>
                    {" "}
                    <Link style={{textDecoration: 'none',color:'white'}}to="/Profile">Profile</Link>
                  </>  ) : (
                    
                  <>
                   <li class="nav-item">  
                   <a class="nav-link" href="/login"><Link style={{textDecoration: 'none',color:'white'}} to="/login">Login</Link></a>   </li>
                  </>
                )}
       
        
    
     
      </ul>
    </div>
  </div>
</nav>
     
    </>
  );
};
export default MovieNavBar;
