function addMoviesToDom(movies) {
    const navList = document.getElementById("nav-list");

    const listItems = movies.map((movie) => {
        let listItem = document.createElement("li");

        let image = document.createElement("img");
        image.src = movie.Poster;

        let link = document.createElement("a");
        link.href = "https://www.imdb.com/title/" + movie.imdbID;
        link.target = "_blank";

        listItem.appendChild(link);
        link.appendChild(image);

        return listItem;
    });

    listItems.forEach((listItem) => {
        navList.appendChild(listItem);
    });
}

function removeMoviesFromDOM() {
    const currentListedMovies = document.getElementById("nav-list");

    while (currentListedMovies.hasChildNodes()) {
        currentListedMovies.removeChild(currentListedMovies.firstChild);
        console.log("All movies are removed");
    };
}

function addEventListeners() {
    const radioButtons = document.getElementsByName("film-filter");

    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener("change", handleOnChangeEvent);
    });
}

function filterMoviesOnTitle(wordInMovieTitle) {
    removeMoviesFromDOM();

    const filterMovies = movieDB.Movies
        .filter((movie) => {
            return movie.Title.includes(wordInMovieTitle);
        });

    addMoviesToDom(filterMovies);

    console.log("array", filterMovies);
    console.log("hey I am", wordInMovieTitle, "movie");
}

function filterLatestMovies() {
    removeMoviesFromDOM();

    const filterMoviesYear = movieDB.Movies
        .filter((movie) => {
            return movie.Year >= 2014;
        });

    addMoviesToDom(filterMoviesYear);

    console.log("2014 and newer:", filterMoviesYear);
}

function handleOnChangeEvent(event) {
    switch (event.target.value) {
        case "newmovies":
            filterLatestMovies("newmovies");
            break;
        case "avenger":
            filterMoviesOnTitle("Avenger");
            break;
        case "xmen":
            filterMoviesOnTitle("X-Men");
            break;
        case "princess":
            filterMoviesOnTitle("Princess");
            break;
        case "batman":
            filterMoviesOnTitle("Batman");
            break;
        default:
            console.log("movie");
            break;
    }
}

addEventListeners();