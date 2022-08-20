import React from 'react'
import { useCookies } from "react-cookie";
import MyBackgroundImage from '../../../assets/img/8048.jpg'
export const UserPage = () => {
  const [token] = useCookies(["token"])
  return (
    <div style={{backgroundImage: `url(${MyBackgroundImage})`,backgroundSize: 'cover',height:"85vh"}}>
       <marquee><h1 style={{color:'white'}}>Welcome,<span style={{color:'green',fontWeight:'bold',fontSize:30}}>{token.token.user}</span> to Brand and Beyond</h1></marquee>
    </div>
  )
}


