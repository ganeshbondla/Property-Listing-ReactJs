import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import Iframe from 'react-iframe'

const DashBoard = () => {

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

  return (
    <>
      <div className="container-fluid p-4" style={{ color: "#e9e6dd" }}>
        <div className="p-2 border border-white rounded">
          <Header />
          <div className="row">
            <div className="col-md-2 col-lg-2 p-2">

            </div>
            <div className="col-md-8 col-lg-8 p-2">
              <div className="mb-2">
                <b>Nik Name : </b>{niknameis}
              </div>
              <div className="mb-2">
                <b>Contact Information :</b> Madhapur, Hyderabad, 500001
              </div>
              <div className="mb-2">
                <FaFacebook size={22}/> <AiFillTwitterCircle size={26}/> <AiFillGoogleCircle size={26} />
              </div>
              <div className="mb-2">
                <b>Mobile Number : </b>{loggedmobile}
              </div>
            </div>
            <div className="col-md-2 col-lg-2 p-2">

            </div>
          </div>
          <hr></hr>
          <div className="row">
              <div className="col-md-2 col-lg-2">

              </div>
              <div className="col-md-8 col-lg-8">
                <h5><b>Your Current Location</b></h5>
                <div className="mt-3 text-center">
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1005282551732!2d78.36645951409872!3d17.45490190545052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c115e11277%3A0xb56f1cc0f014272c!2sNeev%20Systems%20Private%20Limited!5e0!3m2!1sen!2sin!4v1661257386584!5m2!1sen!2sin" width="780" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                </div>
              </div>
              <div className="col-md-2 col-lg-2">
                
              </div>
          </div>
          <hr></hr>
          <div className="row">
              <div className="col-md-2 col-lg-2">

              </div>
              <div className="col-md-8 col-lg-8">
                <h5><b>Dues And Payments</b></h5>
                <div class="accordion mt-3" id="accordionExample">
                <div class="card">
                    <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <b>Paid Payments</b>
                        </button>
                    </h2>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body text-dark">
                        <table class="table text-center">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Payment ID</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>#123456</td>
                                    <td>₹ 10,000</td>
                                    <td><span class="badge badge-success">Success</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>#654321</td>
                                    <td>₹ 14,000</td>
                                    <td><span class="badge badge-danger">Failed</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwo">
                    <h2 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <b>Due Payments</b>
                        </button>
                    </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div class="card-body">
                    <table class="table text-center">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Due Amount</th>
                                    <th scope="col">Due Date</th>
                                    <th scope="col">View Bill</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>₹ 10,000</td>
                                    <td>23-Oct-2022</td>
                                    <td><Link to='#'><b>View Bill</b></Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>₹ 12,000</td>
                                    <td>27-Oct-2022</td>
                                    <td><Link to='#'><b>View Bill</b></Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
              </div>
              <div className="col-md-2 col-lg-2">
                
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
