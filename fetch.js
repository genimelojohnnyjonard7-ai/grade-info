document.getElementById('fetch-btn').addEventListener('click', fetchData);

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        const dataContainer = document.getElementById('data-container');
        dataContainer.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.body}</p>
        `;
    } catch (error) {
        console.error('Error:', error);
    }
}