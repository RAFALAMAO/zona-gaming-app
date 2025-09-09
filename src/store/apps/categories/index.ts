import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// ** Dtos
import type { ICategoryState } from '@/types/Category.type';

// ** Services
import { CategoryService } from '@/services/category/Category.service';

const categoryService = new CategoryService();

const initialState: ICategoryState = {
  loading: false,
  categories: [],
};

// ** Fetchers
export const fetchStoreCategories = createAsyncThunk('appCategories/fetchCategories', async () => {
  return await categoryService.getAllWithProductsCount();
});

// ** Slice
export const appCategoriesSlice = createSlice({
  name: 'appCategories',
  initialState,
  reducers: {
    resetCategories: (state) => {
      state.loading = initialState.loading;
      state.categories = initialState.categories;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStoreCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchStoreCategories.pending, (state) => {
      state.categories = [];
      state.loading = true;
    });
    builder.addCase(fetchStoreCategories.rejected, (state) => {
      state.categories = [];
      state.loading = false;
    });
  },
});

export const { resetCategories } = appCategoriesSlice.actions;
export default appCategoriesSlice.reducer;
