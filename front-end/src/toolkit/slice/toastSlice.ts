import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ToastState = {
  value: boolean;
  dataToast: PayloadType;
};

type PayloadType = {
  message: string;
  iconType: "success" | "fail" | null;
};

const initialState = {
  value: false,
  dataToast: {
    message: "",
    iconType: null,
  },
} as ToastState;

export const toast = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, actions: PayloadAction<PayloadType>) => {
      state.value = true;
      state.dataToast = actions.payload;
    },
    hideToast: (state) => {
      state.value = false;
      state.dataToast = {
        message: "",
        iconType: null,
      };
    },
  },
});

export const { showToast, hideToast } = toast.actions;

export default toast.reducer;
