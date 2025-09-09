import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// ** Dtos
import type { IProductsState } from '@/types/Product.type';

// ** Services
import { ProductService } from '@/services/product/Product.service';

const productService = new ProductService();

const initialState: IProductsState = {
  countAvailables: 0,
  loadingAvailables: false,
  latestProducts: [],
  loadingLatest: false,
  filters: {
    search: '',
    category: '',
    page: 0,
    limit: 0,
  },
};

// ** Fetchers
export const fetchStoreCountAvailables = createAsyncThunk(
  'appProducts/fetchCountAvailables',
  async () => {
    return await productService.countAll();
  },
);

export const fetchStoreLatest = createAsyncThunk('appProducts/fetchLatest', async () => {
  return await productService.getLatest(5);
});

// ** Slice
export const appProductsSlice = createSlice({
  name: 'appProducts',
  initialState,
  reducers: {
    resetProducts: (state) => {
      state.countAvailables = initialState.countAvailables;
      state.loadingAvailables = initialState.loadingAvailables;
      state.latestProducts = initialState.latestProducts;
      state.loadingLatest = initialState.loadingLatest;
      state.filters = initialState.filters;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStoreCountAvailables.fulfilled, (state, action) => {
      state.countAvailables = action.payload;
      state.loadingAvailables = false;
    });
    builder.addCase(fetchStoreCountAvailables.pending, (state) => {
      state.countAvailables = 0;
      state.loadingAvailables = true;
    });
    builder.addCase(fetchStoreCountAvailables.rejected, (state) => {
      state.countAvailables = 0;
      state.loadingAvailables = false;
    });
    builder.addCase(fetchStoreLatest.fulfilled, (state, action) => {
      state.latestProducts = action.payload;
      state.loadingLatest = false;
    });
    builder.addCase(fetchStoreLatest.pending, (state) => {
      state.latestProducts = [];
      state.loadingLatest = true;
    });
    builder.addCase(fetchStoreLatest.rejected, (state) => {
      state.latestProducts = [];
      state.loadingLatest = false;
    });
  },
});

export const { resetProducts } = appProductsSlice.actions;
export default appProductsSlice.reducer;
