import { NavLink } from "react-router-dom"
import avatar from '../images/avatar.png';


function Navbar() {


  return (
    <>
   <nav class="navbar navbar-expand-lg bg-light  ">
  <div class="container-xl">
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-itenm m-2" >
          <NavLink class="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item m-1">
          <NavLink class="nav-link " to="/jobs">Jobs</NavLink>
        </li>
        <li class="nav-item m-1">
          <NavLink class="nav-link " to="/add-jobs">Add Jobs</NavLink>
        </li>
        <li class="nav-item m-1 dropdown">
          <NavLink class="nav-link  dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </NavLink>
          <ul class="dropdown-menu">
            <li><NavLink class="dropdown-item" to="/">Action</NavLink></li>
            <li><NavLink class="dropdown-item" to="/">Another action</NavLink></li>
            <li><NavLink class="dropdown-item" to="/">Something else here</NavLink></li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="logo navbar-brand">
      <img src={avatar} alt="Avatar Logo" />
      <NavLink class="navbar-brand" to="/">BRAND</NavLink>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar