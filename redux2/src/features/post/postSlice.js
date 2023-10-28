import {createSlice} from "@reduxjs/toolkit";

const initialState=[
    {id:'1',title:"learning REdux tutorial tookit",content:"I've skjdljsdlf"},
    {id:'2',title:"Creating the Slicing for reducer ",content:"I've skjdljsdlf"},
]
const postsSlice=createSlice({
    name:"posts",
    // name of slice in redux store 
    initialState,
    reducers:{
        

        postAdded(state,action){
            state.push(action.payload);
        }

    }
})


export const selectAllPosts=(state)=>state.posts;
export const {postAdded} =postsSlice.actions;  
export default postsSlice.reducer;

// now, our task to make a form to create new post 
// but before that we create the reducers function that handle the post