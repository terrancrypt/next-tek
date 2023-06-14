import { hideToast, showToast } from "@/toolkit/slice/toastSlice";
import { AppDispatch } from "@/toolkit/store";

export const message = {
  success: (dispatch: AppDispatch, message: string) =>{
    dispatch(showToast({ message, iconType: "success" }))
    setTimeout(() => {
      dispatch(hideToast());
    }, 5000);
  },
  error: (dispatch: AppDispatch, message: string) =>{
    dispatch(showToast({ message, iconType: "fail" }))
    setTimeout(() => {
      dispatch(hideToast());
    }, 5000);
  }
}
