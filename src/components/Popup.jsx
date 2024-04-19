import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { show, hide, bookId } from '../slice/showPopup'
import { addBook, editBook } from '../slice/book';
import { v4 as uuidv4 } from 'uuid';

export default function Popup() {

    const dispatch = useDispatch();
    const showPopup = useSelector(state => state.showPopup);
    const booklist = useSelector(state => state.books);


    const [payload, setPayload] = useState({
        id: '',
        name:'',
        price: 0,
        category: '',
        description: ''
    })

    useEffect(() => {
        const book = booklist.books.find(book => book.id === showPopup.bookId);
        const id = booklist.books.length+1;
        if (showPopup.bookId && book) {
            setPayload(book);
        } else {
            setPayload({
                id: id,
                name: '',
                price: 0,
                category: '',
                description: ''
            });
            console.log(id)
        }
    }, [showPopup.bookId, booklist.books]);



    const handleSubmit= (e) =>{
        e.preventDefault();
        const id = booklist.books.length+1;
        
        if(showPopup.bookId){
            dispatch(editBook(payload))
        }else{
            console.log("new"+payload)

            dispatch(addBook(payload))
        }
        setPayload({
            id:id,
            name:'',
            price: 0,
            category: '',
            description: ''})
        dispatch(hide())

    }
    

  return (   
    <div>
        <div className={showPopup.show?"popupbkgrd":"disable"}></div>
        <div className={showPopup.show?"popup":"disable"}>
            <div className='head'>
                <h2 style={{width: '-webkit-fill-available'}}>{showPopup.bookId? "Edit Book":"Add New Book"}</h2>
                <h2 className='closeBtn' onClick={()=> dispatch(hide())}>X</h2>
            </div>

            <form onSubmit={(e) => handleSubmit(e)}className='form'>
                <div>
                    <span>Book Name: </span>
                    <input type="text" name="name" value={payload.name} onChange={(e)=>setPayload({...payload, name: e.target.value})} placeholder="Book Name" required />
                </div>
                <div>
                    <span>Price: </span>
                    <input type="number" min="0"  name="price" value={payload.price} onChange={(e)=>setPayload({...payload, price: e.target.value})} placeholder="Price" required />
                </div>
                <div>
                    <span>Category: </span>
                    <input type="text" name="category" value={payload.category} onChange={(e)=>setPayload({...payload, category: e.target.value})}  placeholder="Category" required />
                </div>
                <div>
                    <span>Description: </span>
                    <textarea name="description" value={payload.description} onChange={(e)=>setPayload({...payload, description: e.target.value})}  placeholder="Description" required />
                </div>
                <button  type="submit">Save</button>
            </form>
        </div>
        
        </div>    
  )
}
