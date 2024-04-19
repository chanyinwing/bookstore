import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [
        {
            id: 1,
            name: "Harry Potter: Philosopher's Stone (1997)",
            price: 68,
            category: "Fiction",
            description:'magic world'
        },
        {   
            id: 2,
            name: "The Minds of Billy Milligan",
            price: 55,
            category: "Novel",
            description:'24 people in one body'

        }
    ]
  };

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook(state, action) {
            console.log(action.payload)
            state.books.push(action.payload)
        },
        removeBook(state, action) {
            state.books = state.books.filter((book) => book.id !== action.payload.id)
        },
        editBook: (state, action) => {
            const index = state.books.findIndex(book=>book.id===action.payload.id)
            state.books[index] = action.payload
          }
    }
})


export const { addBook, removeBook, editBook } = bookSlice.actions;

    export default bookSlice.reducer;
