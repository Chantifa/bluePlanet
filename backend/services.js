//api service
const apiUrl = 'https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bfe.elektrische-anlagen_ueber_36';

// Make a GET request to the API
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        var data = response.json()
        date_parse = data[document].data
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