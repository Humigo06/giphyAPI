console.log("script.js loaded");

const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=pyUA9ShFQBp0mEATEZAfaZ5ICwauQ6gk&q=test&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

async function getImage() {
    const response = await fetch(endpoint);
    const data = await response.json();
    const images = []; 
    images.push(data.data[0].images.fixed_height.url);


    console.log(images);
    // Update the DOM with the image
    const output = document.querySelector("#gif-container");
    // output.innerHTML = `<img src="${images}" class="col-3 mb-3">`;
    const btn = document.querySelector("#fetch-gif-btn");
    output.innerHTML = "";
    btn.addEventListener("click", async function() {
        for (let i = 0; i < images.length; i++) {
            output.innerHTML += `<img src="${images}" class="col-3 mb-3">`;
        }
});
}
getImage();
