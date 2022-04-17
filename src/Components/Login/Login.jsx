import { Link } from 'react-router-dom'
import { useState } from 'react'
import { loginfailure, loginsuccess } from '../Redux/Login_Redux/Login_Action'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { store } from '../Redux/Store'

export const Login=()=>{
const navigate=useNavigate();  
const [logindata,setLoginupdata]=useState({})        
const dispatch=useDispatch(); 

const handlechange=(e)=>{
      const {id,value}=e.target;
      setLoginupdata({...logindata,[id]:value});
  }
 
  const senddata=(e)=>{
    e.preventDefault();
    dispatch(loginfailure())
      fetch("https://asifbackendcode.herokuapp.com/login",{
      method:"POST",
      body:JSON.stringify(logindata),
      headers:{"content-type":"application/json"}
      }).then(Response=>Response.json()).then((data)=>{dispatch(loginsuccess(data));if(data.token)navigate("/teachers"); else{alert("enter correct details")} }).catch((e)=>{dispatch(loginfailure)})
  }
 
   return(
       <div className='login'>
           <div  className="form_container">
             <form  onSubmit={senddata}>

               <label id='lab'>Enter Your Email Id</label><br/>
               <input  type="text" id="email" onChange={handlechange}  /><br/><br/>

               <label id='lab'>Enter Your New Password</label><br/>
               <input  type="text" id="password" onChange={handlechange}  /><br/><br/>

               <input id='subbtn' type="submit"/>

              </form>
           </div>
       </div>
   )

}