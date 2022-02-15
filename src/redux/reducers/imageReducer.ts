import { createAction, createReducer } from "@reduxjs/toolkit";
import { IImage } from "types/image";

export const removeImage = createAction<IImage, "removeImage">("removeImage");
export const addImage = createAction<IImage, "addImage">("addImage");
export interface ImageReducerState {
  rejectedImages: IImage[];
  approvedImages: IImage[];
}
export const initState: ImageReducerState = {
  rejectedImages: [],
  approvedImages: [],
};
export const approveImage = createAction<IImage, "approveImage">("approveImage");
export const rejectImage = createAction<IImage, "rejectImage">("rejectImage");

const imageReducer = createReducer<ImageReducerState>(initState, builder => {
  builder.addCase(approveImage, (state, action) => {
    state.approvedImages.push(action.payload);
  });
  builder.addCase(rejectImage, (state, action) => {
    state.rejectedImages.push(action.payload);
  });
});

export default imageReducer;
