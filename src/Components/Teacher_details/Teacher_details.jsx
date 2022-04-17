import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import './Classdetails.css'
export const Teaccherdetails=()=>{
const [data,setData]=useState([])    
const {id}=useParams();
useEffect(()=>{
    fetch(`https://asifbackendcode.herokuapp.com/class`).then(Response=>Response.json()).then(data=>{setData(data)}) 
},[])
const displaydata=data.filter((elem)=>{
    return id==elem.teacher_id._id
})   
console.log(displaydata)
    return(
        <div>
           {
               displaydata.map((elem)=>{
                   return (<div className="details">
                         <p>Name:{elem.teacher_id.name}</p>
                         <p>Age:{elem.teacher_id.age}</p>
                         <p>Gender:{elem.teacher_id.gender}</p>
                         <p>Grade:{elem.grade}</p>
                         <p>Section:{elem.section}</p>
                         <p>Subjects:{elem.subject}</p>

                         </div>)
               })
           }   
        </div>
    )
} 