import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import './Teachers.css'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { TEACHER_Action } from "../Redux/Teacher_Redux/Teachers_Action";
import { useState } from "react";

export const Teachers=()=>{
const auth=useSelector(store=>store.Login.user);
const [tdata,setTdata]=useState([])
const [tpage,setTPage]=useState(1)
const [page,setPage]=useState(1)
const [gender,setGender]=useState("")
const [order,setOrder]=useState("")
const navigate=useNavigate();
// useEffect(()=>{
//     if(!auth)
//     // navigate("/login")
// },[])  
const dispatch=useDispatch();

useEffect(()=>{
    fetch(`https://asifbackendcode.herokuapp.com/teacher?page=${page}&size=4`).then(Response=>Response.json()).then(data=>{setTdata(data.teachers);setTPage(data.totalpages)}) 
},[page])
 
const genderfun=(task)=>{
    setGender(task)
    getgender()
 }
 const getgender=()=>{
     fetch(`https://asifbackendcode.herokuapp.com/teacher?page=1&size=4&task=${gender}`).then(Response=>Response.json()).then(data=>{setTdata(data.teachers);setTPage(data.totalpages)}) 
 
 }
 const orderfun=(sort)=>{
    setOrder(sort)
    getorder()
 }
 const getorder=()=>{
    fetch(`https://asifbackendcode.herokuapp.com/teacher?page=1&size=4&order=${order}`).then(Response=>Response.json()).then(data=>{setTdata(data.teachers);setTPage(data.totalpages)}) 

}

 console.log(tdata)
   return(
       <div>
       <div className="method">
       <div>
          <button onClick={()=>{genderfun("male")}}>Filter By Male</button>
          <button onClick={()=>{genderfun("female")}}>Filter By Female</button>
          {/* <button onClick={()=>{getdata()}}>all</button> */}
      </div>
      <div className="order">
          <button onClick={()=>{orderfun("asc")}}>ascending</button>
          <button onClick={()=>{orderfun("desc")}}>descending</button>
      </div>
       </div>
         <div>
             <table border="2px" cellSpacing="0px" cellPadding="10px" className="tab">
                 <thead>
                     <tr>
                         <td>Name</td>
                         <td>Age</td>
                         <td>Gender</td>
                     </tr>
                 </thead>
                 <tbody>
                     {tdata.map((elem)=>{
                         return (
                             <tr>
                             <td> <Link to={`/class/${elem._id}`}> {elem.name}</Link></td>
                                 <td><Link to={`/class/${elem._id}`}>{elem.age}</Link></td>
                                 <td><Link to={`/class/${elem._id}`}>{elem.gender}</Link></td>
                             </tr>
                         )
                     })}
                 </tbody>
             </table>
         </div>
         <div className="pagination">
      
      <button className="pbtn1" disabled={page===1} onClick={()=>{
                if(page>1){
                    setPage(page-1)
                }
            }}>Prev</button>
            <button className="pbtn2" disabled={page===tpage} onClick={()=>{
                    setPage(page+1)
            }}>Next</button>
      </div>
       </div>
   )
}