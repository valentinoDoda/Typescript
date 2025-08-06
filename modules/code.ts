import {person} from "./jsFiles/code"
console.log(person.name)

declare const DEBUG : {
    getState:() =>{
        id:string
    } 
}
 
const state = DEBUG.getState();