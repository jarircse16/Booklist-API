// books.js

// Function to fetch and display books
function fetchBooks() {
    fetch('../backend/api/crud_api.php')
        .then(response => response.json())
        .then(data => {
            const booksList = document.getElementById('booksList');

            // Clear existing table rows
            booksList.innerHTML = '';

            // Populate the table with book data
            data.forEach(book => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <!--<td>${book.id}</td> -->
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.published_at}</td>
                    <td>
                        <button onclick="editBook(${book.id})">Edit</button>
                        <button onclick="deleteBook(${book.id})">Delete</button>
                    </td>
                `;
                booksList.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Fetch books when the page loads
fetchBooks();
