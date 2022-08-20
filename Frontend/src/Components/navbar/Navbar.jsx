import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useCookies } from "react-cookie";
import logo from '../../../assets/logo/brandandbeyond-logo.webp'
export const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  // console.log(cookies)
  const navigate = useNavigate();
  return (
    <div style={{alignItems:'center',display:'flex',justifyContent:'space-between',padding:10,paddingRight:'5%',paddingLeft:'5%',boxShadow:' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
      <Link  to={"/"}>
        <img style={{width:125}} src="logo" alt="" />
      </Link>

      {cookies.token ? (
      <div style={{display:'flex'}}>
        <div style={{marginRight:20,fontSize:26}} onClick={()=>{
          cookies.token.role==='admin'?navigate('/admin'):navigate('/userpage')
          
        }}>Welcome, <span style={{fontWeight:'bold'}}>{cookies.token.user}</span></div>
          <Button
          variant="contained"
          
          onClick={() => {
            removeCookie("token");
            navigate("/");
          }}
        >
          Logout
        </Button>
        </div>
      ) : (
        <Button
          variant="contained"
          
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>
     
      )}
    </div>
  );
};
