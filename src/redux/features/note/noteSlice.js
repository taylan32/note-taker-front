import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  notes: [],
  loading: false,
  errors: [],
  selectedNote: {},
};

export const getNotes = createAsyncThunk(
  "getNotes",
  async (page = { pageNumber: 1, pageSize: 10 }) => {
    let url = `http://localhost:8080/api/notes/?pageNumber=${page.pageNumber}&pageSize=${page.pageSize}`;
    const { data } = await axios.get(url);
    return data;
  }
);

export const createNote = createAsyncThunk("createNote", async (insertData) => {
  let url = "http://localhost:8080/api/notes/";
  const { data } = await axios.post(url, insertData);
  return data;
});

export const deleteNote = createAsyncThunk("deleteNote", async (id) => {
  let url = `http://localhost:8080/api/notes/${id}`;
  const { data } = await axios.delete(url);
  return data;
});

export const updateNote = createAsyncThunk("updateNote", async (updateData) => {
  let url = "http://localhost:8080/api/notes/update";
  const { data } = await axios.put(url, updateData);
  return data;
});

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setSelectedNote: (state, action) => {
      state.selectedNote = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getNotes.pending, (state, action) => {
    //     state.loading = true
    // })
    // builder.addCase(getNotes.fulfilled, (state, action) => {
    //     state.notes = action.payload
    //     state.loading = false
    // })
    // builder.addCase(getNotes.rejected, (state, action) => {
    //     state.errors.push(action.error)
    //     state.loading = false
    // })
    // builder.addCase(createNote.pending, (state, action) => {
    //     state.loading = true
    // })
    // builder.addCase(createNote.fulfilled, (state, action) => {
    //     state.loading = false
    //     state.notes = state.notes?.push(action.payload)
    // })
    // builder.addCase(createNote.rejected, (state, action) => {
    //     state.loading = false
    //     state.errors.push(action.payload)
    // })
    // builder.addCase(deleteNote.pending, (state, action) => {
    //     state.loading = true
    // })

    // builder.addCase(deleteNote.fulfilled, (state, action) => {
    //     state.loading = false
    //     state.notes = state.notes?.filter(item => item.id !== action.payload.id)
    // })

    builder.addCase(createNote.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createNote.fulfilled, (state, action) => {
      state.loading = false;
      state.notes = [action.payload];
    });
    builder.addCase(createNote.rejected, (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.errors = action.payload;
    });

    builder.addCase(getNotes.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getNotes.fulfilled, (state, action) => {
      state.loading = false;
      if (action?.payload.content.length > 0) {
        state.notes = action.payload.content;
      } else {
        state.notes = [];
      }
    });
    builder.addCase(getNotes.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });

    builder.addCase(deleteNote.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(deleteNote.fulfilled, (state, action) => {
      if (!action.payload.id) {
        console.log("Delete could not completed", action.payload);
        return;
      }
      state.loading = false;
      state.notes = state.notes.filter((item) => item.id !== action.payload.id);
    });

    builder.addCase(updateNote.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateNote.fulfilled, (state, aciton) => {
      state.loading = false;
      const {
        arg: { id },
      } = aciton.meta;
      if(id) {
        state.notes = state.notes.map((item) => item.id === id ? aciton.payload : item)
      }
    });
    builder.addCase(updateNote.rejected, (state, action) => {
      state.loading = false
      state.errors = action.payload
    })
  },
});

export const { setSelectedNote } = noteSlice.actions;

export default noteSlice.reducer;
