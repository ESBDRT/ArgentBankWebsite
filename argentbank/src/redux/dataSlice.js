import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  firstName: "",
  status: "idle", 
  error: null,
};

export const fetchData = createAsyncThunk("data/fetchData",async () => {

    const token = localStorage.getItem("token");

    const response = await axios.post("http://localhost:3001/api/v1/user/profile", {},{
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(response.data)
    return response.data;
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.username = action.payload.username;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;