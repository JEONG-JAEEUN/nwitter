import { authService } from "fbase";
import React from "react";
import { useNavigate } from "react-router-dom";
const Profile = () => {
    const navigate = useNavigate();
    const onLogOutClick = ()=> {
    authService
    .signOut()
    .then(r => navigate("/"));
    //사용자가 로그아웃하면 홈으로 이동하게
    };
    
    return (
    <>
    <button onClick={onLogOutClick}>Log Out</button>
    </>
    )
 };
 export default Profile