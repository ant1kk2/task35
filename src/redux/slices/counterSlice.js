import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  value: 123,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialValue,
  reducers: {
    increaseValue: (state) => {
      state.value += 1;
    },
    decreaseValue: (state) => {
      state.value -= 1;
    },
    resetValue: (state) => {
      state.value = initialValue.value;
    },
  },
});

export const { increaseValue, decreaseValue, resetValue } = counterSlice.actions;

export default counterSlice.reducer;
