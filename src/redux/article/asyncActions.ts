import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchArticles = createAsyncThunk('blog/fetchAritcles', async () => {
  const { data } = await axios.get('https://61a54a844c822c0017042179.mockapi.io/posts');
  console.log(data);
  return data;
})