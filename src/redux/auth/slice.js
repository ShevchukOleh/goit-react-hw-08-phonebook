import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser, logIn, logOut, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
        builder
        .addCase(register.fulfilled, (state, action) => {
            console.log(action.payload.user)
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(logOut.fulfilled, (state, action) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(fetchCurrentUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        })
    }
});

export default authSlice.reducer;