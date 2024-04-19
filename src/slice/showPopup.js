import { createSlice, configureStore } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const showPopupSlice = createSlice({
  name: 'showPopup',
  initialState: {
    show: false,
    bookId: '',
  },
  reducers: {
    show: state => {
      state.show = true
    },
    hide: state => {
      state.show = false
    },
    bookId: (state, action) => {
      state.bookId = action.payload?.id || '';
    },
  }
})

export const { show, hide, bookId } = showPopupSlice.actions

export default showPopupSlice.reducer;