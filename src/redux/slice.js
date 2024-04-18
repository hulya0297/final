import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  card: [],
};

const slice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      if (
        state.card.find((item) => item.id === action.payload.id) !== undefined
      ) {
        state.card = state.card.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              count: item.count + action.payload.count,
            };
          }
          return item;
        });
        return;
      }

      state.card.push(action.payload);
    },
  },
});

export const { addToCard } = slice.actions;
export default slice.reducer;
