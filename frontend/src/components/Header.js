import React from "react";


function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-5">
            <div className="container-fluid">
                <div>
                <img src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png" style={{width: "40px"}} alt="logo" ></img>
                <a className="navbar-brand" href="http://localhost:3000/" style={{margin:"20px"}}>Laboratory Management System</a>
                </div>
                <div className="user" >
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="user" style={{width: "40px"}}></img>
                </div>        
            </div>
        </nav>
                )
}

export default Header;