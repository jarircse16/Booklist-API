// Function to handle form submission and add a new book
document.getElementById('addBookForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const publishedAt = document.getElementById('publishedAt').value;

    fetch('../backend/api/crud_api.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title,
            author,
            published_at: publishedAt,
        }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Response:', data);
            fetchBooks(); // Refresh the book list after adding a new book
        })
        .catch(error => console.error('Error:', error));
});
