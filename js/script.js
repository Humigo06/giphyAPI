console.log("script.js loaded");

// Defines the references for search input field and output
const search = document.querySelector("#search-input");
const output = document.querySelector("#gif-container");

// Function for getting the images
async function getImages() {
    // API link; changes with search input
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=pyUA9ShFQBp0mEATEZAfaZ5ICwauQ6gk&q=${search.value}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    
    // Fetches the data from the api
    const response = await fetch(endpoint);
    const data = await response.json();
    
    // Array to store the images. For loop finds the URLs for each of the 25 images gathered
    const images = [];
    for (let i = 0; i < data.data.length; i++) {
        images.push(data.data[i].images.fixed_height.url);
    }
    return images // Returns the array the image URLs live in
}

// Defines the reference for the button element
const btn = document.querySelector("#fetch-gif-btn");

// Even listener for button presses
btn.addEventListener("click", async function() {
    output.innerHTML = ""; // Clears output for each search
    const images = await getImages(); // Retrieves the images
    for (let i = 0; i < images.length; i++) {
        output.innerHTML += `<img src="${images[i]}" class="col-3 mb-3">`;
    }
}); 


