import { GET_TEACHERS } from "./Teachers_Action"

const initstate={teachers:[]}

export const Teacher_reducer=(store=initstate,{type,payload})=>{
     console.log("j",payload)
   switch(type){

       case GET_TEACHERS:{
           return{...store,teachers:payload}
       }

       default:{
           return store;
       }
   }

} 

