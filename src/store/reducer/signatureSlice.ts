import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface Isignature {
  signature: string | undefined;
}

// Define the initial state using that type
const initialState: Isignature = {
  signature: "",
};

export const signatureSlice = createSlice({
  name: "signature",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateSignature: (state, action: PayloadAction<string>) => {
      state.signature = action.payload;
    },
  },
});

export const { updateSignature } = signatureSlice.actions;

export default signatureSlice;
