import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IRootState {
  data: any[];
}

const initialState: IRootState = {
  data: [],
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: { 
    pushData: (
      state: IRootState,
      action: PayloadAction<any[]>,
    ) => {
      state.data = action.payload;
    },
  },
});

export const {pushData
} = mainSlice.actions;
export const selectData = (state: {main: any}) => state.main.data;
export default mainSlice.reducer;
