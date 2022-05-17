var elWrapper = document.querySelector('.js-wrapper')


{/* <img src="${movie.bigPoster}" class="poster" alt="movie img"> */}
 
function createCard (movie) {
    var card = `
    <div class="card wrapp" style="width: 16rem;">
    
    <iframe width="100%" height="200" src="${movie.trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="card-body">
    <p class="card-text"> ${movie.summary}  </p>
    <h5 class="card-title text-truncate"> ${movie.title} </h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> ${movie.year} </li>
      <li class="list-group-item">${movie.runtime}  </li>
      <li class="list-group-item"> ${movie.language} </li>
    </ul>
    <div class="card-body">
      <a href="#" class=" link-success">watch more</a>
    </div>
  </div>
    `

    // creating elLi 

    var elLi = document.createElement('li')
    elLi.className = `my-3 `
    elLi.innerHTML = card
    elWrapper.appendChild(elLi)
}

// making for loop 

// htpps://www.youtube.com/embed/${movies[i].trailer.split('=')[1]}`

function main(movies, length = movies.length) {
    for (let i = 0; i < length; i++) {
      console.log(movies[i].trailer.split('=')[1]);
     var movieObject = {
         title : movies[i].title,
         year : movies[i].year,
         categories : movies[i].categories,
         summary : movies[i].summary,
         imdbId: movies[i].imdbId,
         imdbRating : movies[i].imdbRating,
         runtime : movies[i].runtime,
         language : movies[i].language,
         trailer : `https://www.youtube.com/embed/${movies[i].trailer.split('=')[1]}`,
          bigPoster : movies[i].bigPoster,
          smallPoster : movies[i].smallPoster,
      
        }  ;
      
       createCard(movieObject) ;
    }
}
main(movies, 50);