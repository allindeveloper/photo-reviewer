import { createAction, createReducer } from "@reduxjs/toolkit";
import { IApprovedImage, IImage } from "../../types/image";

export const removeImage = createAction<IImage, "removeImage">("removeImage");
export const addImage = createAction<IImage, "addImage">("addImage");
interface ImageReducerState {
  images: IImage[];
  approvedImages: IApprovedImage[];
}
const initState: ImageReducerState = {
  images: [],
  approvedImages: [],
};
export const approveImage = createAction<IApprovedImage, "approveImage">("approveImage");
export const rejectImage = createAction<IApprovedImage, "rejectImage">("rejectImage");

const imageReducer = createReducer<ImageReducerState>(initState, builder => {
  builder.addCase(approveImage, (state, action) => {
    state.approvedImages.push(action.payload);
  });
  builder.addCase(rejectImage, (state, action) => {
    state.approvedImages.filter((imageItem) => imageItem.id !== action.payload.id);
  });
});

export default imageReducer;
