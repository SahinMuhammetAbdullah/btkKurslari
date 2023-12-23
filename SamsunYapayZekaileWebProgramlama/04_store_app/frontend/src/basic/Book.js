import React, { useState } from 'react';

function Book() {
    const [bookData, setBookData] = useState({
        title: '',
        price: '',
        author: ''
    });

    const handleChange = (e) => {
        setBookData({
            ...bookData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bookData);
    }

    return (
        <div>
            <h1>Kitap Formu</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Kitap adı"
                    value={bookData.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="price"
                    placeholder="Fiyatı"
                    value={bookData.price}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="author"
                    placeholder="Yazarı"
                    value={bookData.author}
                    onChange={handleChange}
                />
                <input type="submit" />
            </form>
        </div>
    );
}

export default Book;
