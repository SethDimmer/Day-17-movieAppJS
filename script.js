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
   showMovies(data.results)
}

// THIS IS HOW YOU FETCH THE DATA FROM THE TMDB MOVIE API



// DOING SEARCH BAR FUNCTIONAILITY DOWN BELOW

// i have to bring in the form

const form = document.getElementById('form')
const search = document.getElementById('search') //input from html  

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const searchTerm = search.value
    
    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)
        
        // CONCATENATING THE SEARCH TERM ONTO THE SEARCH_API
        
        search.value = ''
    }
    else{//if i submit without having anything in search bar i will reload the page 
        window.location.reload()
    }
})


// putting the data into the DOCUMENT OBJECT MODEL (DOM)

const main = document.getElementById('main')

function showMovies(movies) {
    // this functions task is to take in 
    // the data and display it on the DOM.

    main.innerHTML = '' // i want to clear it first

    // the take the movies which is the data that 
    // is fetched from the async function and loop through them

    movies.forEach((movie) => {
        // for EACH movie
        // i am destructuring here to pull the different data that i want to DISPLAY
        // from the movie reponse.
        // i am pulling from the async function/
        const { title,poster_path, vote_average,
        overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
        <div class="movie">
        <img
          src="https://images.unsplash.com/photo-1518173835740-f5d14111d76a?ixlib=rb-1.2.1&ix
        id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=
        1154&q=80"
        />
        <div class="movie-info">
          <h3>Movie Title</h3>
          <span class="green">9.8</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          debitis reiciendis voluptatibus labore odit, reprehenderit eos
          provident facere alias assumenda.
        </div>
      </div>
        `
        
    });

}

