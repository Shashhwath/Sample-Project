import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import './index.css'
const Dashboard = () => {
    return (
        <div className='dashboard vh-100'>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-danger w-100  navbar ">
                <a className="navbar-brand text-light m-2" >Dashboard</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav d-flex justify-content-center">
                        <Link className="nav-item nav-link text-light" to="/dashboard">Home </Link>
                        <Link className="nav-item nav-link text-light" to="/dashboard/about">About</Link>
                        <Link className="nav-item nav-link text-light" to="/dashboard/contact">Contact Us </Link>
                        <Link className="nav-item nav-link text-light" to="/">Logout </Link>
                    </div>
                </div>
            </nav>
            </div>
                <Outlet/>

        </div>
    )
}

export default Dashboard
