import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const loginAdmin = createAsyncThunk<
  string, // return type = JWT token string
  { username: string; password: string }, // argument type
  { rejectValue: string } // reject type
>("admin/login", async ({ username, password }, thunkAPI) => {
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      username,
      password,
    });
    return res.data.token;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(
      err.response?.data?.message || "Login failed"
    );
  }
});

interface AdminState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AdminState = {
  token:
    typeof window !== "undefined" ? localStorage.getItem("adminToken") : null,
  loading: false,
  error: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("adminToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        localStorage.setItem("adminToken", action.payload);
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = adminSlice.actions;
export default adminSlice.reducer;
