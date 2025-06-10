import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//  Налаштування базового URL для GoIT API
axios.defaults.baseURL = "https://connections-api.goit.global";

//  Витягуємо токен зі стейту
const getAuthToken = (thunkAPI) => thunkAPI.getState().auth.token;

// ------------------ fetchContacts ------------------
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    const token = getAuthToken(thunkAPI);
    if (!token) return thunkAPI.rejectWithValue("No token");

    try {
      const res = await axios.get("/contacts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// ------------------ addContact ------------------
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    const token = getAuthToken(thunkAPI);
    if (!token) return thunkAPI.rejectWithValue("No token");

    try {
      const res = await axios.post("/contacts", contact, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // ✅ обов'язково!
        },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// ------------------ deleteContact ------------------
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    const token = getAuthToken(thunkAPI);
    if (!token) return thunkAPI.rejectWithValue("No token");

    try {
      await axios.delete(`/contacts/${contactId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);
