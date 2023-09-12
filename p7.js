// Define a function to fetch and display books
function fetchAndDisplayBooks() {
    const xhr = new XMLHttpRequest();

    // Replace 'books.json' with your API URL if needed
    const apiUrl = 'p7.json';

    xhr.open('GET', apiUrl, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const books = JSON.parse(xhr.responseText);
            displayBooks(books);
        } else {
            console.error('Failed to fetch books');
        }
    };

    xhr.onerror = function () {
        console.error('Network error occurred');
    };

    xhr.send();
}

// Define a function to display the list of books
function displayBooks(books) {
    const bookListDiv = document.getElementById('bookList');
    bookListDiv.innerHTML = ''; // Clear previous content

    if (books.length === 0) {
        bookListDiv.textContent = 'No books found.';
        return;
    }

    const ul = document.createElement('ul');
    books.forEach((book) => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}`;
        ul.appendChild(li);
    });

    bookListDiv.appendChild(ul);
}

// Add a click event listener to the "Fetch Books" button
document.getElementById('fetchBooks').addEventListener('click', fetchAndDisplayBooks);
