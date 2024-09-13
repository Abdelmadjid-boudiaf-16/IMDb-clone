import MovieDetails from "@/components/movies/movie-details";

const Movie = ({ params }) => { 
  const id = params.movieId
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold underline decoration-amber-600 underline-offset-4">
        Movie Details
      </h1>
      <div className="my-5 border border-gray-400" />
      <MovieDetails id={id} />
    </div>
  );
};

export default Movie;
