import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// ** Dtos
import type { IBrandState } from '@/types/Brand.type';

// ** Services
import { BrandService } from '@/services/brand/Brand.service';

const brandService = new BrandService();

const initialState: IBrandState = {
  loading: false,
  brands: [],
};

// ** Fetchers
export const fetchStoreBrands = createAsyncThunk('appBrands/fetchBrands', async () => {
  return await brandService.getAll();
});

// ** Slice
export const appBrandsSlice = createSlice({
  name: 'appBrands',
  initialState,
  reducers: {
    resetBrands: (state) => {
      state.loading = initialState.loading;
      state.brands = initialState.brands;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStoreBrands.fulfilled, (state, action) => {
      state.brands = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchStoreBrands.pending, (state) => {
      state.brands = [];
      state.loading = true;
    });
    builder.addCase(fetchStoreBrands.rejected, (state) => {
      state.brands = [];
      state.loading = false;
    });
  },
});

export const { resetBrands } = appBrandsSlice.actions;
export default appBrandsSlice.reducer;
