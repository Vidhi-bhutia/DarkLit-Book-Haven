fetch('books.xml')
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        const books = data.getElementsByTagName('book');
        let bookList = document.getElementById('book-list');
        for (let book of books) {
            let title = book.getElementsByTagName('title')[0].textContent;
            let author = book.getElementsByTagName('author')[0].textContent;
            let isbn = book.getElementsByTagName('isbn')[0].textContent;
            let publisher = book.getElementsByTagName('publisher')[0].textContent;
            let edition = book.getElementsByTagName('edition')[0].textContent;
            let price = book.getElementsByTagName('price')[0].textContent;

            let bookCard = document.createElement('div');
            bookCard.classList.add('book-card');
            bookCard.innerHTML = `
                <h2>${title}</h2>
                <p><strong>Author:</strong> ${author}</p>
                <p><strong>ISBN:</strong> ${isbn}</p>
                <p><strong>Publisher:</strong> ${publisher}</p>
                <p><strong>Edition:</strong> ${edition}</p>
                <p><strong>Price:</strong> $${price}</p>
            `;
            bookList.appendChild(bookCard);
        }
    });
