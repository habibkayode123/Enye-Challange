import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"


let intialState = {
    firstName: "qq ",
    lastName: "qq ",
    age:"ee ",
    hobby:" " ,   
    birthDay:"",
    valuenew:""
}
export function submitAction (value){
    return{
        type:"SUBMITACTION",
        payload:value
    }

}
function reducer (state = {},action){
    if (action.type === "SUBMITACTION" ){
        return action.payload
    }

}
const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(),
    // other store enhancers if any
  ));
  export default store