import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slice/book"
import popupReducer from "./slice/showPopup"

const rootReducer =  {
    books: bookReducer,
    showPopup: popupReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store