console.log("script.js loaded");

let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=&q=giphytest&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

async function getImage() {
    const response = await fetch(endpoint);
    const endpoint = await response.json();
    const image = endpoint.images[0];

    // Update the DOM with the image
    const output = document.getElementById("gif-container");
    output.textContent = image;
}

getImage()