import { createSlice } from '@reduxjs/toolkit';
export const userFacebookSlice = createSlice({ 
    name: 'UserData',
    initialState: {
        picture:'',
        name:'',
        email:'',
        token:''
    },
    reducers: {
        fecthDataUserFacebook: (initialState, action) => {
            return(
                {...initialState,picture:action.payload.picture.data.url,name:action.payload.name}
            )
        } ,
        fecthTokenFacebook : (initialState, action) => {
            console.log("action.payload",action.payload);
            return(
                {...initialState,token:action.payload}
            )
        } ,
    },
});

const { fecthDataUserFacebook ,fecthTokenFacebook} = userFacebookSlice.actions;  

export const fecthDataUserAction = (data) =>  {   
    return(dispatch)=>{
        dispatch(fecthDataUserFacebook(data));
    }
};

export const fecthTokenFacebookAction = (data) =>  {   
    return(dispatch)=>{
        dispatch(fecthTokenFacebook(data));
    }
};


//get value
export const userFacebookValue = state => state.userFacebookState; 

