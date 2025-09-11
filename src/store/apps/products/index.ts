import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// ** Dtos
import type { FindByFiltersPagDataDto } from '@/services/product/dtos/Product.service.dto';
import type { IProductsState } from '@/types/Product.type';

// ** Services
import { ProductService } from '@/services/product/Product.service';

const productService = new ProductService();

const initialState: IProductsState = {
  countAvailables: 0,
  loadingAvailables: false,
  latestProducts: [],
  loadingLatest: false,
  filteredProductsRes: {
    items: [],
    total: 0,
    page: 0,
    totalPages: 0,
  },
  loadingFilteredProducts: false,
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

export const fetchStoreFilteredProducts = createAsyncThunk(
  'appProducts/fetchFilteredProducts',
  async (filters: FindByFiltersPagDataDto) => {
    return await productService.findByFiltersPag(filters);
  },
);

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

    builder.addCase(fetchStoreFilteredProducts.fulfilled, (state, action) => {
      state.filteredProductsRes = action.payload;
      state.loadingFilteredProducts = false;
    });
    builder.addCase(fetchStoreFilteredProducts.pending, (state) => {
      state.filteredProductsRes = initialState.filteredProductsRes;
      state.loadingFilteredProducts = true;
    });
    builder.addCase(fetchStoreFilteredProducts.rejected, (state) => {
      state.filteredProductsRes = initialState.filteredProductsRes;
      state.loadingFilteredProducts = false;
    });
  },
});

export const { resetProducts } = appProductsSlice.actions;
export default appProductsSlice.reducer;
