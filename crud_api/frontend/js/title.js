// Fetch and set the title dynamically
    fetch('layouts/title.html')
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const title = doc.querySelector('title');

            if (title) {
                document.getElementById('dynamicTitle').innerText = title.innerText;
            }
        })
        .catch(error => console.error('Error:', error));
