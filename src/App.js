import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Landing from "./components/FrontUI/Landing";
import SignUp from "./components/FrontUI/SignUp";
import SignIn from "./components/FrontUI/SignIn";
import Phone from "./components/FrontUI/Phone";
import OTPScreen from "./components/FrontUI/OTP.Screenjs";
import Home from "./components/Home/Home";
import MyMeetingList from "./components/Home/MyMeetingList";
import InvitationList from "./components/Home/InvataionList";
import CreateMeeting from "./components/Home/CreateMeeting";
import UserProfile from "./components/Home/UserProfile";
import MeetingDetails from "./components/Meeting/MettingDetails";


function App (){

    const [appLoaded, setAppLoaded] = useState(false);


    useEffect(() => {
        //Simulate app loading delay
        const timer = setTimeout(() => {
            setAppLoaded(true)
        },2000)

        return () => clearTimeout(timer);
    },[])



    return(
        <>
        <Router>
            <div className="App">
                {
                    !appLoaded ? (<Landing/>) : (
                       <>
                        <Routes>
                            <Route path="/" element={<Navigate to="/signin" replace/>}></Route>
                            <Route path="/signin" element={<SignIn/>}></Route>
                            <Route path="/signup" element={<SignUp/>}></Route>
                            <Route path="/phone" element={<Phone/>}></Route>
                            <Route path="/otp" element={<OTPScreen/>}></Route>
                            <Route path="/home" element={<Home/>}></Route>
                            <Route path="/mymeetings" element={<MyMeetingList/>}></Route>
                            <Route path="/invitations" element={<InvitationList/>}></Route>
                            <Route path="/createmeeting" element={<CreateMeeting/>}></Route>
                            <Route path="/userprofile" element={<UserProfile/>}></Route>
                            <Route path="/meeting/:id" element={<MeetingDetails/>}></Route>
                        </Routes>
                       </>
                    )
                }
                
               
            </div>
        </Router>
        </>
    )
}


export default App;