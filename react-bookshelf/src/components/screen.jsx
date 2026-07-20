import { useEffect, useState } from "react";
import "../css/screen.css";

const Reset = (setBookName, setBookAuthor, setReadStatus) => {
    setBookName('');
    setBookAuthor('');
    setReadStatus(false);
}

const Screen = () => {

    const [bookName, setBookName] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [readStatus, setReadStatus] = useState(false);
    const [bookList, setBookList] = useState([]);

    
    const items = [
        {id: 1, name: "Book 1", author: "Author 1", readStatus: true},
        {id: 2, name: "Book 2", author: "Author 2", readStatus: false},
        {id: 3, name: "Book 3", author: "Author 3", readStatus: true},
    ]

    useEffect(() => {
    items.forEach((item) => {
    console.log(`ID: ${item.id}, Name: ${item.name}, Author: ${item.author}, Read Status: ${item.readStatus}`);
})
})

    return(
        <>
            <div className="screen">
                <form>
                    <div className="form-grid-child">
                        <label htmlFor="bookName">Book Name: </label>
                        <input type="text" id="bookName" maxLength={15} value={bookName} onChange={(e) => setBookName(e.target.value)}/>
                    </div>
                    <div className="form-grid-child">
                        <label htmlFor="bookAuthor">Author Name: </label>
                        <input type="text" id="bookAuthor" maxLength={15} value={bookAuthor} onChange={(e) => setBookAuthor(e.target.value)}/>
                    </div>
                    <div className="form-grid-child">
                        <label htmlFor="readStatus">Read Status: </label>
                        <input type="checkbox" id="readStatus" checked={readStatus} onChange={(e) => setReadStatus(e.target.checked)}/>
                    </div>
                    <div className="form-grid-child">
                        <button type="button" onClick={() => Reset(setBookName, setBookAuthor, setReadStatus)}>Clear</button>
                        <button type="button" onClick={() => {
                            setBookList([...bookList, { id: bookList.length, name: bookName, author: bookAuthor, readStatus: readStatus }]);
                            Reset(setBookName, setBookAuthor, setReadStatus);
                        }}>Add</button>
                    </div>
                </form>
            </div>
        </>
    );
}   

export default Screen;



