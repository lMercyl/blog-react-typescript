import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleSliceState, ArticleType, Status } from './types';
import { fetchArticles } from "./asyncActions";

const initialState: ArticleSliceState = {
  items: [],
  status: Status.LOADING,
};

const ArticleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setArticle(state: ArticleSliceState, action: PayloadAction<ArticleType[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(fetchArticles.pending, (state: ArticleSliceState, action: PayloadAction<ArticleType[]>) => {
      state.items = [];
      state.status = Status.LOADING;
    });

    builder.addCase(fetchArticles.fulfilled, (state: ArticleSliceState, action: PayloadAction<ArticleType[]>) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchArticles.rejected, (state: ArticleSliceState, action: PayloadAction<ArticleType[]>) => {
      state.items = [];
      state.status = Status.ERROR;
    });
  },
})

export const { setArticle } = ArticleSlice.actions;

export default ArticleSlice.reducer
