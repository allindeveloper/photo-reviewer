import { createAction, createReducer } from '@reduxjs/toolkit';
import { IImage } from '../../types/image';

export const removeImage = createAction<IImage, 'removeImage'>('removeImage')
export const addImage = createAction<IImage, 'addImage'>('addImage')

const imageReducer = createReducer<IImage[]>([], (builder) => {
    builder
      .addCase(addImage, (state, action) => {
        state.push(action.payload)
      })
      builder
      .addCase(removeImage, (state, action) => {
        state.filter((imageItem, i) => imageItem.id !== action.payload.id)
      })
  })

export default imageReducer;