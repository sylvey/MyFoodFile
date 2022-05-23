import { createSlice } from "@reduxjs/toolkit";
import { postUpdateSheet } from "../api/Personal";

const mySheetSlice = createSlice({
    name: "mySheet",
    initialState: [
        {
            title: "卡路里",
            type: "3choices", // linearObject
            left: "<500",
            right: ">500",
            gid: '0',
        },
        {
            title: "卡路里",
            type: "3choices", // linearObject
            left: "<500",
            right: ">500",
            gid: '2',
        },
    ],
    reducers: {
        addQuestion: (state, action)=>{
            const newQuestion = {
                title: "",
                type: "2choices",
                left: "",
                right: "",
                gid: Date.now().toString(),
            }
            state.push(newQuestion);
        },
        onChangeTitle: (state, action)=>{
            const index = state.findIndex((question)=> question.gid === action.payload.gid);
            state[index].title = action.payload.title;
            // console.log('title', title);
        },
        onChangeLeft: (state, action)=>{
            const index = state.findIndex((question)=> question.gid === action.payload.gid);
            state[index].left = action.payload.left;
            // console.log('title', title);
        },
        onChangeRight: (state, action)=>{
            const index = state.findIndex((question)=> question.gid === action.payload.gid);
            state[index].right = action.payload.right;
            // console.log('title', title);
        },
        // submitSheet: async (state, action)=>{
        //     await postUpdateSheet(state);
        // }

        
    }
});

export const {addQuestion, onChangeTitle, onChangeLeft, onChangeRight, submitSheet} = mySheetSlice.actions;
export default mySheetSlice.reducer;