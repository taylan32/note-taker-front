import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    notes:[],
    loading:false,
    errors:[]
}

export const getNotes = createAsyncThunk("getNotes", async (page) => {
    let url = `http://localhost:8080/api/notes/?pageNumber=${page.pageNumber}&pageSize=${page.pageSize}`
    const {data} = await axios.get(url)
    return data
})

export const noteSlice = createSlice({
    name:"notes",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getNotes.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getNotes.fulfilled, (state, action) => {
            state.notes = action.payload
            state.loading = false
        })
        builder.addCase(getNotes.rejected, (state, action) => {
            state.errors.push(action.error)
            state.loading = false
        })
    }
})


export default noteSlice.reducer