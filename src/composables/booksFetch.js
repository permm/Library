const getBooks = async () => {
    try {
        const res = await fetch("https://library-server-74wp.onrender.com/books");
        if (res.ok) {
            return await res.json();
        }
        else throw new Error('Error, cannot get book data');
    }
    catch (err) {
        console.log(err);
    }
};

const getBookById = async (id) => {
    try {
        const res = await fetch("https://library-server-74wp.onrender.com/books/"+id);
        if (res.ok) {
            return await res.json();
        }
        else throw new Error('Error, cannot get book data');
    }
    catch (err) {
        console.log(err);
    }
};


const createBook = async (newBook) => {
    try {
        const res = await fetch('http://nawat.myvnc.com:5000/books', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBook)
        })
        return res.status
    }
    catch (err) {
        console.log(err)
    }
}

const updateBookById = async (updateBook) => {
    try {
        const res = await fetch(`http://nawat.myvnc.com:5000/books/${updateBook.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateBook)
        })
        return res.status
    }
    catch (err) {
        console.log(err)
    }
}

const deleteBookById = async (deleteId) => {
    try {
        const res = await fetch(`http://nawat.myvnc.com:5000/books/${deleteId}`, {
            method: 'DELETE'
        })
        return res.status
    }
    catch (err) {
        console.log(err)
    }
}

export { getBooks, deleteBookById, createBook, updateBookById, getBookById};