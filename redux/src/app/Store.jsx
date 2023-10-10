
// redux store and Store are same;
// You must have single store for your app and it's recommend

import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

// here configure store in function which we import from the @redux toolkit 

// inside the configureStore we have the objects which have the collection
// of the slices 

export const store=configureStore({
    // we put here the reducer here what we create
    reducer:{
        counter:counterReducer, 
    }

     
})