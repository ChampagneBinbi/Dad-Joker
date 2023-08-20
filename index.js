const btnEl = document.getElementById("btn");
const jokeEl =document.getElementById("joke");

const apiKey = "FR26R8pZVvyBgLXw9M32wGHSJVzqBOTePbAK1tsi";



const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,

    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){

    try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";

    jokeEl.innerText = data[0].joke;
        
    } catch (error) {
        jokeEl.innerText = "An error Happened, try again Later"
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a Joke";
        console.log(error);
        
    }

    
}

btnEl.addEventListener("click", getJoke);