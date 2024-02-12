// const fetch = require("isomorphic-fetch");

require('dotenv').config();

// Print out value of API key stored in .env file
// console.log(process.env.API_KEY)

async function getImage(query){

    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const item = await fetch(endpoint);
    const data = await item.json();
    // console.log(data);
    let oneUrl = data['data'][0]['images'];
    //console.log(oneUrl);
    return oneUrl;
}

// console.log(getImage("dog"));

let imageURL = getImage("dog");
setTimeout(() => {console.log(imageURL)}, 5000);
