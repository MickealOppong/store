import { createSlice } from "@reduxjs/toolkit";

const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null;
}
const initialState = {
  user: getUserFromStorage(),
  accessToken: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = action.payload.user;
      const token = action.payload.jwt;
      state.user = user;
      state.token = token;
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user')
    }

  }
})
export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;