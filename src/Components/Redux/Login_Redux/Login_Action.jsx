 export  const LOGIN_LOADING="LOGIN_LOADING";
 export const  LOGIN_SUCCESS="LOGIN_SUCCESS";
 export const LOGIN_FAILURE="LOGIN_FAILURE";


 export const loginloading=()=>{
     return{type:LOGIN_LOADING}
 }
 
 export const loginsuccess=(data)=>{
    return{type:LOGIN_SUCCESS,payload:data}
}

export const loginfailure=()=>{
    return{type:LOGIN_FAILURE}
}