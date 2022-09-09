import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

    const persons = [
        {
            nikname : 'Rob',
            mobile_number : '1234567891',
        },
        {
            nikname : 'John',
            mobile_number : '1987654321'
        },
        {
            nikname : 'Ganesh',
            mobile_number : '8074725033'
        },
        {
            nikname : 'Warnar',
            mobile_number : '8294023287'
        },
        {
            nikname : 'Dhoni',
            mobile_number : '9912634288'
        }
    ];

    const navigate = useNavigate();

    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loginMobile');
    localStorage.removeItem('loginNikName');

    const fontSize = {
        fontSize : '30px' 
    };
    const fontSizeTwo = {
        fontSize : '22px' 
    };

    const[mobile, setMobile] = useState('');
    const[validotp, setOtp] = useState('');
    const[otpsent, setOtpSent] = useState(false);
    const[inputotpis, setInputOtp] = useState('');
    const[usernikname, setUserNikName] = useState('');


    const signIn = (e) => {
        e.preventDefault();
        if(mobile === '' || mobile.length < 10 || mobile.length > 10)
        {
            alert('Mobile Number Invalid');
        }
        else
        {
            const findPerson = persons.find(u => {
                return u.mobile_number === mobile;
            });
            
            if(findPerson === undefined)
            {
                setUserNikName(mobile);
                setMobile(mobile);
                console.log(findPerson);
            }
            else
            {
                setUserNikName(findPerson.nikname);
                setMobile(findPerson.mobile_number);
                console.log(findPerson);
            }

            const newOtp = Math.floor(100000 + Math.random() * 900000);
            setOtp(newOtp);
            setOtpSent(true);
            document.getElementById('showOtp').innerHTML = `Otp Sent, Your Otp is : ${newOtp}`;
        }
    }

    const validateOtp = (e) => {
        e.preventDefault();
        if(validotp === parseInt(inputotpis))
        {
            console.log('Valid OTP');
            localStorage.setItem('loginMobile', mobile);
            localStorage.setItem('loginNikName', usernikname);
            localStorage.setItem('isLoggedIn', true);
            navigate("property-setup");
        }
        else
        {
            console.log('Invalid OTP');
            alert('Invalid OTP');
            localStorage.setItem('loginMobile', mobile);
            localStorage.setItem('loginNikName', usernikname);
            localStorage.setItem('isLoggedIn', false);
            navigate("/");
        }
    }

 return(
    <>
        <div className='container-fluid p-4' style={{color : "#e9e6dd"}}>
            <div className='p-2 border border-white rounded'>
                <div className='row my-auto d-flex vh-100 p-3'>
                    <div className='col-md-2 col-lg-2 my-auto'>

                    </div>
                    <div className='col-md-4 col-lg-4 my-auto p-3'>
                         <div className='mb-3' style={fontSize}>
                            WELCOME TO <b>ARG</b>
                         </div>
                         <div className='mb-2' style={fontSizeTwo}>
                            We are the leading lease platform managing 10 millions of customers.
                         </div>
                         <div className='mb-2' style={fontSizeTwo}>
                            We offer our customers.
                         </div>
                         <div className='mb-2' style={fontSizeTwo}>
                            Realtime  information About you Home and  Premises.
                         </div>
                    </div>
                    <div className='col-md-4 col-lg-4 my-auto p-3'>
                        <form>
                            {  otpsent ? (
                                <>
                                <div className = "form-group mb-2">
                                <input type="number" className = "mb-2 form-control form-control-lg" id="mobileNumber" value={mobile} />
                                <input type="number" className = "form-control form-control-lg" id="otpIs" defaultValue={''} onChange={(e) => setInputOtp(e.target.value)} placeholder="Enter OTP here" />
                                </div>
                                <b className='text-white' id='showOtp'></b>
                                <div className='text-right'>
                                    <button onClick={validateOtp} className = "btn btn-sm border border-white text-white">Validate, Get Me In</button>
                                </div> 
                                </>
                            ) : (
                                <>
                                <div className = "form-group mb-2">
                                    <input type="text" className = "form-control form-control-lg" id="mobileNumber" onChange={(e) => setMobile(e.target.value)} placeholder="Enter Mobile Number" />
                                </div>
                                <b className='text-white' id='showOtp'></b>
                                <div className='text-right'>
                                    <button onClick={signIn} className = "btn btn-sm border border-white text-white">Get Me In</button>
                                </div>
                                </>
                            ) }
                        </form>
                    </div>
                    <div className='col-md-2 col-lg-2 my-auto'>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
 )
}

export default LandingPage;