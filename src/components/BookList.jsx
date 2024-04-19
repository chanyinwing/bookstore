import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook, editBook } from '../slice/book';
import { show, hide, bookId } from '../slice/showPopup';
import Popup from './Popup';



const BookList = () => {

    const dispatch = useDispatch();
    const booklist = useSelector(state => state.books?.books || []);
    const showPopup = useSelector(state => state.showPopup.show);


    const handleNewBook = () => {
        dispatch(show(true)); 
        dispatch(bookId())
    }

    const handleEditBook = (book) => {
        dispatch(show(true));
        dispatch(bookId(book))
    }

    const handleDelBtn= (e, book)=>{
        e.stopPropagation();
        dispatch(removeBook(book));
    }

  return (
    <div>

        <button style={{margin: '2rem'}} onClick={()=>handleNewBook()}>Add New Book</button>
        <table id='bookList'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th> 
                    <th style={{border: '0px', opacity: '0', width: '0px'}}>DelBtn</th>
                </tr>
            </thead>
            
            <tbody>
                {booklist.map(book => {
                    return (
                            <tr key={book.id} onClick={()=>handleEditBook(book)}>
                                <td>{book.name}</td>
                                <td>$ {book.price}</td>
                                <td>{book.category}</td>
                                <td onClick={(e)=>handleDelBtn(e, book)}>x</td>
                            </tr>
                    )
                })}
            </tbody>
        </table>
        <Popup />
    </div>
  );
}

export default BookList;
