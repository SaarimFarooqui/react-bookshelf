import "../css/screen.css";
import { useState } from "react";


const Screen = () => {

    const [bookName, setBookName] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [readStatus, setReadStatus] = useState(false);
    const [bookList, setBookList] = useState([]);
    
    const AddBook = (e) =>{
        e.preventDefault();
        setBookList([...bookList, { id: bookList.length, name: bookName, author: authorName, readstatus: readStatus}])
    }
    return(
        <>
            <div className="screen">

                <form className="screen-form">
                    <label htmlFor="book-name">Book: </label>
                    <input type="text" id="book-name" value={bookName} onChange={(e) => setBookName(e.target.value)} />
                    <label htmlFor="author-name">Author: </label>
                    <input type="text" id="author-name" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
                    <div><label htmlFor="read-status">Read Status: </label>
                    <input type="checkbox" id="read-status" checked={readStatus} onChange={(e) => setReadStatus(e.target.checked)} /></div>
                    <div className="form-buttons">
                        <button type="submit" onClick={(e) => AddBook(e)}>Add Book</button>
                        <button type="submit">Update Book</button>
                    </div>
                </form>

                <div className="books-grid">
                    {bookList.map((book) => 
                        <div className="book-card">
                            <p className="card-info">Id: {book.id}</p>
                            <p className="card-info" style={{"font-weight": "700"}}>Book: {book.name}</p>
                            <p className="card-info">Author: {book.author}</p>
                            <p className="card-info">Read Status: {readStatus ? "Completed" :  "Incomplete"}</p>
                        </div>
                    )}
                </div>

            </div>
        </>
    );
}   

export default Screen;


