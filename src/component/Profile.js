import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Profile = () => {

    const [isloggedinis, setIsLoggedIn] = useState(null);
    const [loggedmobile, setLoggedMobile] = useState("");
    const [niknameis, setNikName] = useState("");
  
    const navigate = useNavigate();
  
    useEffect(() => {
      const mobile = localStorage.getItem("loginMobile");
      const loginStatus = localStorage.getItem("isLoggedIn");
      const loginNikName = localStorage.getItem("loginNikName");
  
      if (loginStatus) {
        setNikName(loginNikName);
        setIsLoggedIn(true);
        setLoggedMobile(mobile);
      } else {
        setIsLoggedIn(false);
        navigate("/");
      }
    }, [navigate]);

    console.log(isloggedinis);
    console.log(loggedmobile);
    console.log(niknameis);

        return(
            <>
            <div className="container-fluid p-4" style={{ color: "#e9e6dd" }}>
                <div className="p-2 border border-white rounded">
                <Header />

                </div>
            </div>
            </>
        )
    
}

export default Profile;