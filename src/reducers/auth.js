import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INTIAL_STATE={
    isSignedIn:null,
    userName:'',
    userId:''
}
export default (state=INTIAL_STATE,action)=>{
    switch (action.type) {
        case SIGN_IN:
            return {...state,isSignedIn:true,...action.payload}
            break;
            case SIGN_OUT:
                return  {...state,isSignedIn:false}
                break;    
    
        default:
            return state;
            break;
    }
}

