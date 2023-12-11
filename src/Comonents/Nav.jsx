import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Nav() {
    const [theme, setTheme] = useState("light-theme");
    const toggleTheme = () => {
        if (theme === "light-theme") {
            setTheme("dark-theme");
        } else {
            setTheme("light-theme");
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                <div className="container-fluid" >
                    <Link className="navbar-brand text-danger fw-bold" to="#">DhirajD87</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse" id="navbarSupportedContent"  >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About" >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Education">Education</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/Technology">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Project">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Footer">Media</Link>
                            </li>
                            <li className="nav-item">
                               <button onClick={() => toggleTheme()} class="fa-solid fa-sun"><i class="fa-solid fa-sun" ></i></button> 
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>




        </>
    )
}

export default Nav
