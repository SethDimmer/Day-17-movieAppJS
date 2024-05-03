const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

// search endpoint so i can search for movies from the database
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
                                                                // putting a singledouble quote because i want 
                                                                // to concatenate a search term from the search box into the query.


//  Get initial movies
getMovies(API_URL)
//THIS IS THE LAST PART (LINE 11)                                                                

// creating a function so i can get the api request

// Async = makes a function return a promise
// Await = makes an async function wait for a promise

// this function will return a promise
async function getMovies(url) {
    // i am awaiting because fetch returns a promise
    const res = await fetch(url)
    // i am await the response to get the actual data from the api 
    const data = await res.json()

    console.log(data.results)
    /* i am using results because i am getting
    the data from the results array if i follow the 
    the string that is STORED in the API_URL variable
    */
}

// THIS IS HOW YOU FETCH THE DATA FROM THE TMDB MOVIE API



// doing search bar down below

// i have to bring in the form

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')    

