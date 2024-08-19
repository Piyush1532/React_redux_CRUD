import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./demodata";



const userSlice = createSlice({
    name: "users",
    initialState:userList,
    reducers: {
        
    }
});

export default userSlice;
