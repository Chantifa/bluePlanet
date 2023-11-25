//api service
const apiUrl = 'https://api.example.com/zurich-energy-data';

// Make a GET request to the API
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Handle the API response data
        console.log(data);
    })
    .catch(error => {
        // Handle errors
        console.error('Error:', error);
    });