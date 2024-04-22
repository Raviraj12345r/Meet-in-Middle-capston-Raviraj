import { useState } from 'react';
import './SignIn.css';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';




function SignIn() {


    const [phoneNumber, setPhoneNumber] = useState('');
    const [signInOtp, setSignInOtp] = useState(false);
    const navigate = useNavigate();

  

    

    const handleSignIn = async() => {
       try{
          const resp = await axios.post('http://localhost:5000/api/auth/signin',{
            phoneNumber : phoneNumber
          })
          if(resp.data.error === true){
            alert("🚫 User is not registered.")
          }else{
            const response = await axios.post('http://localhost:5000/api/otp/sendotp',{
                phoneNumber : phoneNumber
            })
            alert("📲 OTP send successfully on you'r registred mobile number.")
            console.log(response.data);
            setSignInOtp(true);
            sessionStorage.setItem('phoneNumber',phoneNumber)
            sessionStorage.removeItem('firstName');
            sessionStorage.removeItem('lastName');
            navigate('/otp')
          }
       }catch(error){
            console.log("Error while sign in user...",error)
       }    
    }

    return (
        <>
            <div className="container flex-container-01">
                <div className="flex-container-02">
                    <div className="icon">
                        <img src="https://i.ibb.co/3YnGGYM/phone-In-Hand.png" width="100%" height="100%" alt="icon" />
                    </div>

                    <div className="profile-text">
                        <p className="label-text-1">Log In with Mobile Number</p>
                    </div>

                    <div className="firstName-text">
                        <input type="text" placeholder="Mobile Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>

                    <div className="text-container">
                        <p>
                            <button onClick={handleSignIn} className='signIn-btn'>Sign In</button>
                        </p> 
                    </div>

                    <div className="text-container">
                        <Link to="/signup">
                            <button className='signIn-btn'>Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn;