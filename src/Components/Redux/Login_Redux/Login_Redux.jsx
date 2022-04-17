import { LOGIN_LOADING } from "./Login_Action";
import { LOGIN_SUCCESS } from "./Login_Action";
import { LOGIN_FAILURE } from "./Login_Action";

const state={loading:false,isAuthenticate:false,user:{},error:false}

export const Loginreducer=(store=state,{type,payload})=>{
     
    switch(type){
        case LOGIN_LOADING:{
            return{...store,loading:true}
        }
        case LOGIN_SUCCESS:{
            return{...store,loading:false,isAuthenticate:true,user:payload,error:false}
        }

        case LOGIN_FAILURE:{
            return{...store,error:true}
        }

        default :
        return{store}
    }
}


