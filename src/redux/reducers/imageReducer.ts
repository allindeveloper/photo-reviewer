import { createAction, createReducer } from '@reduxjs/toolkit';
import { IImage } from '../../types/image';

export const remove = createAction<IImage, 'remove'>('remove')
export const add = createAction<IImage, 'add'>('add')

const imageReducer = createReducer<IImage[]>([], (builder) => {
    builder
      .addCase(add, (state, action) => {
        state.push(action.payload)
      })
      builder
      .addCase(remove, (state, action) => {
        // state.filter((todo, i) => i !== action.payload.index)
      })
  })

export default imageReducer;