import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid'
export const userSlice = createSlice({ 
    name: 'User',
    initialState: [
        {id:uuidv4(),imageUrl:"https://travel.mthai.com/app/uploads/2016/04/121648qh7dbccgw4ahw6we.jpg"},
        {id:uuidv4(),imageUrl:"https://www.tqm.co.th/new_images/1090_1.jpg?v=20190828144924"},
        {id:uuidv4(),imageUrl:"https://www.tqm.co.th/gallery/3637.jpg"},
        {id:uuidv4(),imageUrl:"https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"}
    ],
    reducers: {
        fecthDataUser: (initialState, action) => initialState.concat({...action.payload,selectd:action.payload.id}) ,
        deleteDataUser: (initialState, action) =>{
            console.log(action.payload);
            return(
                initialState.filter(e=>e.id !==action.payload)
            )
        }
    },
});

const { fecthDataUser , deleteDataUser} = userSlice.actions;  

//action
export const fecthDataUserAction = (data) =>  {    
    return(dispatch)=>{
        dispatch(fecthDataUser(data));
    }
};

export const deleteUserAction = (data) =>  {    
    return(dispatch)=>{
        dispatch(deleteDataUser(data));
    }
};

//get value
export const userValue = state => state.userState;  //ดึงค่าจาก store  useselector

