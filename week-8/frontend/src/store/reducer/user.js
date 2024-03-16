import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isAuth: false,
    token: "",
    role: "",
  },
  reducers: {
    login(state, actions) {
      return {
        ...state,
        isAuth: true,
        token: actions.payload.token,
        role: actions.payload.role,
      };
    },
    logout(state, actions) {
      return {
        ...state,
        isAuth: false,
        token: "",
        role: "",
      };
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
