"use client";
import MovieItem from "./movie-item";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { fetchMovies } from "@/utils/fetchMovies";
import LinkButton from "../ui/link-button";

const MoviesList = () => {
  const genre = useSearchParams().get("genre") || "All";
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      setError(null);
      setLoading(true);
      try {
        const moviesData = await fetchMovies(genre);
        setMovies(moviesData);
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [genre]);
  if (error)
    return (
      <div className="flex w-full flex-col items-center justify-center gap-10">
        <h1 className="w-full rounded-xl bg-red-400/40 p-4 text-center md:w-3/5">
          something went wrong. Please try again!
        </h1>
        <LinkButton onClick={() => reset()}>Try again</LinkButton>
      </div>
    );
  if (loading)
    return <p className="text-2xl font-bold animate-pulse">Loading...</p>;

  const filteredMovies = movies.filter((movie) => movie.Poster !== "N/A");
  return (
    <>
      {
        <ul className="flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row">
          {filteredMovies?.map((movie) => (
            <MovieItem key={movie.imdbID} movie={movie} />
          ))}
        </ul>
      }
    </>
  );
};

export default MoviesList;
