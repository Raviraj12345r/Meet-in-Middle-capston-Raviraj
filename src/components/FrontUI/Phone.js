import './Phone.css';
import Header from '../Common/Header';
import { useState, useEffect } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



function Phone(){


    const [phoneNumber, setPhoneNumber] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(otpSent){
            navigate('/otp')
        }
    },[otpSent, navigate]);

    const isValidPhoneNumber = (phoneNumber) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
    };

    const handleSendOTP = async() => {
        if (isValidPhoneNumber(phoneNumber)) {
            try{
                const response = await axios.post('http://localhost:5000/api/otp/sendotp',{
                    phoneNumber : phoneNumber
                })
                alert("📲 OTP sent successfully to you'r mobile number....")
                console.log(response.data);
                sessionStorage.setItem('phoneNumber',phoneNumber);
                setOtpSent(true);
    
                // fetch('http://localhost:5000/api/otp/sendotp',{
                //     method:'POST',
                //     body:JSON.stringify({
                //         phoneNumber : phoneNumber
                //     }),
                //     headers : {
                //         "content-type" : "application-json"
                //     }
                // })
                // .then(() =>{
                //     alert("OTP sent successfully...")
                //     setOtpSent(true);
                // })
                // .catch((error) => {
                //     console.log("Error while sending OTP...")
                // })
               
    
            }catch(error){
                console.error("Failed to send OTP : ", error);
            } 
        }else{
            alert("Enter Valid Phone Number")
        }
    }

    return(
        <>
        {
            (!agreeTerms || !isValidPhoneNumber(phoneNumber)) ?
                (<Header/>) :
                (
                <div className="flex-container-21">
                    <div><Link to="/signup" className="prev btn btn-primary ms-2"><i className="fa-solid fa-chevron-left"></i></Link></div>
                    <div><p className="next btn btn-primary me-2" onClick={handleSendOTP}>NEXT</p></div>
                </div>
            )
        }
        <div className="flex-container-22">
            <div className="flex-container-23">
                <div className="icon">
                    <img src="https://i.ibb.co/3YnGGYM/phone-In-Hand.png" width="100%" height="100%" alt="icon"/>
                </div>

                <div className="lable-text">
                    <p className="label-text-1">Enter Your Mobile Number</p>
                    <p className="label-text-2">We need to send you confirmation code to get started</p>
                </div>

                <div className="phone-text">
                    <input type="text" placeholder="(+ 91)" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}}/>
                </div>

                {!isValidPhoneNumber(phoneNumber) && (
                    <div className="error">Please enter a valid 10-digit phone number.</div>
                )}


                <div className="term-condition">
                  <input type="checkbox" checked={agreeTerms} onChange={(e) => {setAgreeTerms(e.target.checked)}} /><label>&nbsp; &nbsp;By continuing you agree to Terms and Conditions</label>
                </div>
            </div>
        </div>
        </>
    )
}

export default Phone;