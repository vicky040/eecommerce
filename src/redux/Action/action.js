import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPostData = createAsyncThunk(
    "posts/fetchData",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            if (!response.ok) {
                throw new Error("Failed to fetch data from the API.");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
