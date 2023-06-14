import { createSlice } from "@reduxjs/toolkit";

const initialState={
    answers:[],
    numberOfAnswers:0,
    question:0
}

const QuizzSystem=createSlice({
    name:"user",
    initialState,
    reducers:{
        AddAnswer:(state,action)=>{
            state.numberOfAnswers+=1;
            const tempvar={...action.payload}
            state.answers.push(tempvar);
        },
        
        EmptyAnswers:(state,action)=>{
            state.answers=[];
            state.question+=1;
        }
    }
})

export const {AddAnswer,EmptyAnswers}=QuizzSystem.actions;

export default QuizzSystem.reducer;