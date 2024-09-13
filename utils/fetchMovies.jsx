const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const num = 30;

export const fetchMovies = async (genre) => {
  let movies = [];
  let page = 1;

  while (movies.length < num) {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${genre}&type=movie&page=${page}`,
    );
    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error);
    }

    movies = [...movies, ...data.Search];

    if (data.totalResults <= movies.length) break;

    page += 1;
  }

  const movieDetailsPromises = movies.slice(0, num).map(async (movie) => {
    const detailResponse = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`,
    );
    const detailData = await detailResponse.json();

    if (detailData.Response === "False") {
      throw new Error(detailData.Error);
    }

    return detailData;
  });

  const moviesDetails = await Promise.all(movieDetailsPromises);
  return moviesDetails;
};

export const fetchMovieById = async (id) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`,
  );
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error);
  }

  return data;
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&type=movie`,
    );
    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error);
    }

    const movies = data.Search || [];

    const movieDetailsPromises = movies.map(async (movie) => {
      const detailResponse = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`,
      );
      const detailData = await detailResponse.json();
      return detailData;
    });

    const moviesDetails = await Promise.all(movieDetailsPromises);
    return moviesDetails;
  } catch (err) {
    console.error("Fetch Error:", err);
    throw new Error("An unexpected error occurred.");
  }
};
