import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  var myDate = new Date();
  var hrs = myDate.getHours();

  var greet;

  if (hrs < 12) greet = "Good Morning!";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon!";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening!";

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

  const hrColor = {
    Color: "white",
  };

  console.log(loggedmobile);

  if (isloggedinis) {
    return (
      <>
        <div className="row mt-3 p-2">
          <div className="col-md-1 col-lg-1"></div>
          <div className="col-md-5 col-lg-5">
            <h5>
              Hello, <b>{niknameis}</b>
            </h5>
            <p id="greetingsMsg">
              <b>{greet}</b> and welcome to ARG!
            </p>
          </div>
          <div className="col-md-4 col-lg-4"></div>
          <div className="col-md-2 col-lg-2 text-center">
            <div className="dropdown">
              <button
                className="btn btn-sm btn-white text-white"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FaUserCircle size={26} />
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link to="/dashboard" className="dropdown-item">
                  Dashboard
                </Link>
                <Link to="/" className="dropdown-item">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr style={hrColor}></hr>
      </>
    );
  } else {
    //nothing
  }
};

export default Header;
