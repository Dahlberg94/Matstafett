import React from "react"
import { Outlet, NavLink, Link } from "react-router-dom"
import "./Navbar.css"
import RT29 from "../assets/Bilder/RT29.png"



const NavBar = () => {
    
    return (
        <div className="Navbar-Layout">
            <header>
                <nav className="Navbar">
                <div>
                            <img className="navLogga" src={RT29} alt="" />
                        </div>
                    <div className="leftText">
                        <h2 className="leftTextH2">Kramfors Matstafett</h2>
                        </div>
                       
                    <div className="nav-links">
                        <NavLink className="nav-link" to="/">Hem</NavLink>
                        <NavLink className="nav-link" to="info">Info</NavLink>
                        <NavLink className="nav-link" to="SåGårDetTill">Så går det till</NavLink>
                        <NavLink className="nav-link" to="Anmälan">Anmälan</NavLink>
                        <NavLink className="nav-link" to="Arrangörer">Arrangörer</NavLink>
                        <NavLink className="nav-link" to="Samarbetspartners">Samarbetspartners</NavLink>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )

}

export default NavBar;