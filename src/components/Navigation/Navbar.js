import React from 'react'
// import './css/Navbar.css'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light" id='navBar' >
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href='/'>Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>

  </div>
</nav> 
<div>
<marquee behavior="scroll" direction="right" scrollamount="12" className="bannerSpace">
<img id='img' alt='banner not available' style={{ width:`100%` }}  src="https://edgerewards.axisbank.co.in/r360-catalogue-bucket/app/banner-images/TravelEdge_SpecialFare_Website_Desktop_1920x420_23062022.jpg"></img>
<img id='img' alt='banner not available' style={{ width:`100%` }}  src="https://edgerewards.axisbank.co.in/r360-catalogue-bucket/app/banner-images/TravelEdge_SpecialFare_Website_Desktop_1920x420_23062022.jpg"></img>
</marquee>
</div>

</>
 )
}


Navbar.propTypes = {
        title: PropTypes.string,
}
Navbar.defaultProps={
    img: 'Banner not available'
}