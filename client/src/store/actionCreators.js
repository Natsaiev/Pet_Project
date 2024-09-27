import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const API_URL = "http://localhost:3333/";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    try {
      const response = await axios.get(`${API_URL}categories/all`);
      return response.data;
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
);

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const response = await axios.get(`${API_URL}products/all`);
      return response.data;
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
);

export const getProductsByCategory = createAsyncThunk(
  "categories/getProductsByCategory",
  async (categoryId) => {
    try {
      const response = await axios.get(`${API_URL}categories/${categoryId}`);
      return response.data;
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
);

export const sendFormData = createAsyncThunk("sale/sendFormData", async (data) => {
  try {
    const response = await axios.post(`${API_URL}/sale/send`, { data });
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

export const sendOrderData = createAsyncThunk("sale/sendOrderData", async (data) => {
  try {
    const response = await axios.post(`${API_URL}/order/send`, { data });
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});