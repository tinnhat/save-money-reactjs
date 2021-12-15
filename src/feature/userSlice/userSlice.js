const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { userAPI } = require("../../api/userApi");
export const register = createAsyncThunk("/user/register", async (payload) => {
  //call API to register
  const data = await userAPI.register(payload);
  //save data to localstorage
  // localStorage.setItem("access_token", data.jwt);
  console.log(data);
  localStorage.setItem("user", JSON.stringify(data));
  //return user data
  return data;
});
const userSlice = createSlice({
  name: "user",
  initialState: {
    current: {},
    settings: {},
  },
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});
const { reducer } = userSlice;
export default reducer;
