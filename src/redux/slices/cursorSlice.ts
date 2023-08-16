import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type cursorState = {
  position: {
    x: number;
    y: number;
  };
  variant: "pointer" | "none";
};

const initialState = {
  position: {
    x: -500,
    y: -500,
  },
  variant: "none",
} as cursorState;

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPosition: (state, action: PayloadAction<cursorState["position"]>) => {
      state.position = action.payload;
    },
    setVariant: (state, action: PayloadAction<cursorState["variant"]>) => {
      state.variant = action.payload;
    },
  },
});

export const { setPosition, setVariant } = filterSlice.actions;
export default filterSlice.reducer;
