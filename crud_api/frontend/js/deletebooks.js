// Function to handle deleting a book
function deleteBook(id) {
    const confirmDelete = confirm('Are you sure you want to delete this book?');

    if (confirmDelete) {
        fetch(`../backend/api/crud_api.php?id=${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                console.log('Response:', data);
                fetchBooks(); // Refresh the book list after deleting a book
            })
            .catch(error => console.error('Error:', error));
    }
}
