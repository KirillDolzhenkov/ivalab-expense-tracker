import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface ICategory {
  id: string;
  name: string;
  description?: string;
}

interface CategoriesState {
  categories: ICategory[];
}

const initialState: CategoriesState = {
  categories: []
};

export const slice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<Omit<ICategory, 'id'>>) => {
      const newCategory: ICategory = {
        ...action.payload,
        id: uuidv4()
      };
      state.categories.push(newCategory);
    },
    updateCategory: (state, action: PayloadAction<ICategory>) => {
      const index = state.categories.findIndex((cat) => cat.id === action.payload.id);
      if (index !== -1) {
        state.categories[index] = action.payload;
      }
    }
  },
  selectors: {
    getCategories: (state) => state.categories
  }
});

export const categoriesThunks = {};
export const categoriesActions = slice.actions;
export const categoriesSelectors = slice.selectors;
export const categoriesSlice = slice.reducer;
