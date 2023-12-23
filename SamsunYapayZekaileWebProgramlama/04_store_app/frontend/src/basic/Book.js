import React, { useState } from 'react';

function Book() {

    const initialValues =
    {
        title: '',
        price: '',
        author: '',
    }

    const [bookData, setBookData] = useState(initialValues);

    const handleChange = (e) => {
        setBookData({
            ...bookData,//buradaki "..." operatörü spread operatörüdür ve nesneyi ayrıştırmak için kullanılır
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bookData);

        // Formu boşaltmak için state'i sıfırla
        setBookData(initialValues);
        // e.target.reset(); // alternatif formu temizleme
    }

    return (
        <div>
            <h1>Kitap Formu</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Kitap adı"
                    value={bookData?.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="price"
                    placeholder="Fiyatı"
                    value={bookData?.price}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="author"
                    placeholder="Yazarı"
                    value={bookData?.author}
                    onChange={handleChange}
                />
                <input type="submit" />
            </form>
            {JSON.stringify(bookData)}
        </div>
    );
}

export default Book;
