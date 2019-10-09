const generateRandomNumber = () => {
  const min = 5.0;
  const max = 9.0;
  const highlightedNumber = Math.random() * (max - min) + min;

  return highlightedNumber;
};

const isUserLoggedIn = (isAuthenticatedUser) => {
  if (isAuthenticatedUser) {
    return true;
  }

  return false;
};


const getDirectorModel = (director) => ({
  name: director.name,
  birthday: new Date(director.birthday),
  country: director.country
});

const getActorModel = (actor) => {
  const directors = actor.getDirectors();

  return {
    name: actor.name,
    birthday: new Date(actor.birthday),
    country: actor.country,
    directors: directors.map((director) => getDirectorModel(director))
  };
};

const getMovieModel = (movie, userLoggedIn) => {
  const actors = movie.getActors();
  return {
    title: movie.title,
    year: movie.year,
    rating: movie.rating,
    scoutbase_rating: userLoggedIn ? generateRandomNumber() : null,
    actors: actors.map((actor) => getActorModel(actor))
  };
};

export {
  generateRandomNumber,
  getActorModel,
  isUserLoggedIn,
  getDirectorModel,
  getMovieModel
};
