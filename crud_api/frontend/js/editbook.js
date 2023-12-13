// Function to handle editing a book
function editBook(id, title, author, publishedAt) {
    const updatedTitle = prompt('Enter updated title:', title);

    // Check if the user clicked cancel
    if (updatedTitle === null) {
        return; // Do nothing if the user clicked cancel
    }

    const updatedAuthor = prompt('Enter updated author:', author);
    const updatedPublishedAt = prompt('Enter updated published date:', publishedAt);

    fetch(`../backend/api/crud_api.php?id=${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id,
            title: updatedTitle,
            author: updatedAuthor,
            published_at: updatedPublishedAt,
        }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Response:', data);
            fetchBooks(); // Refresh the book list after editing a book
        })
        .catch(error => console.error('Error:', error));
}
