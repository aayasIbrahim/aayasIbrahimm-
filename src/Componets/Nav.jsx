import React from 'react'
import "./App.css"
import Logo from './Logo'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
        
  {/* NAV START */}
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
      <Link className="navbar-brand" to={"/"}>
            <Logo/>
      </Link>
      <button
        className="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <span className="">
          <i className="fa-solid fa-bars" />
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to={"/"}>
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/about"}>
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./project">
              PROJECTS
            </Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" to="./contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div
    className="offcanvas offcanvas-end"
    tabIndex={-1}
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div className="offcanvas-header">
      
    <a className="navbar-brand"  href="./">
            <Logo />
      </a>

      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body">
      <ul>
        <li>
          <Link to={"/"}>HOME</Link>
        </li>
        <li>
          <Link to="./about">ABOUT</Link>
        </li>
        <li>
          <Link to="./project">PROJECTS</Link>
        </li>
       
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
  {/* NAV END */}


    </div>
  )
}
