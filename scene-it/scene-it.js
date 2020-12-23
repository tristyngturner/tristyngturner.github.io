const button = document.getElementById('button');

button.addEventListener('click', function(e) {
  e.preventDefault();
  let input = document.getElementById('input').value;
  axios.get(`http://www.omdbapi.com/?s=${input}&apikey=9211bf93`).then(function(response) {
    movieCards = response.data.Search;
    console.log(movieCards);
    document.getElementById('renderDiv').innerHTML = "";
    movieCards.map(function(movie) {
      document.getElementById('renderDiv').innerHTML +=
        `<div class="d-flex flex-wrap align-items-top">
            <div id="card-img-top" class="card ${movie.imdbID}" style="width: 18rem;">
              <img src=${movie.Poster} class="card-img-top" alt="No movie poster">
              <div class="card-body">
              <h5 id="card-title" class="card-title">${movie.Title}</h5>
              <p id="card-text" class="card-text"></p>
              <button onclick="saveToWatchlist()" id="${movie.imdbID}" href="#" class="btn">Must Watch</button>
              </div>
          </div>
        </div>`
        });      
      });
  });


  const mustWatch = document.getElementById('must-watch');
  let mustWatchArray = [];
  function saveToWatchlist(mustWatchArray, movieId) {
    const movieToAdd = mustWatchArray.find((movie) => movie.imbdID === movieId);
    console.log(movieToAdd);
  }



