import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Navigation from "components/Navigation";
import Profile from "routes/Profile";

const AppRouter = ({isLoggedIn}) => {
    
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            {/*Navigation이 존재하려면 isLoggedIn가 true여야한다*/}
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                    </>
                ) : (
                    <Route path="/" element={<Auth />} />
                    
                )}
            </Routes>
        </Router>
    )
}

export default AppRouter;
