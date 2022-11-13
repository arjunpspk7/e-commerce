import React from 'react'
// import "./css/Footer.css"

export default function Footer() {
  return (
    <>
    <div className="FooterSpace" >
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">About Us</a>
        <a className="nav-link" href="/">Terms And Conditions</a>
        <a className="nav-link" href="/">FAQ's</a>
      </div>
        </div>
        </div>
    </nav>
    </div>
    
</>

  )
}
