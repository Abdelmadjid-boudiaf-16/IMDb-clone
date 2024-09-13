"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import { FaStar } from "react-icons/fa";
import { IoTime, IoLanguage } from "react-icons/io5";
import { CgAwards } from "react-icons/cg";
import LinkButton from "../ui/link-button";
import { fetchMovieById } from "@/utils/fetchMovies";

const MovieDetails = ({ id }) => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadMovies = async () => {
      setError(null);
      setLoading(true);
      try {
        const movieData = await fetchMovieById(id);
        setMovie(movieData);
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, [id]);
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
  const {
    Title,
    Country,
    Actors,
    Plot,
    Language,
    Runtime,
    imdbRating,
    Released,
    Poster,
    Awards,
    Genre,
    Rated,
    Writer,
  } = movie;
  return (
    <div className="flex w-full flex-col gap-4 overflow-hidden rounded-xl text-center md:flex-row md:text-left">
      <div className="md:min-w-1/2 h-[400px] w-full md:min-h-[600px]">
        <Image
          src={Poster}
          alt={Title}
          width={800}
          height={600}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <div className="flex flex-col gap-4 px-4 py-3">
        <h2 className="flex items-center justify-center space-x-4 text-center text-xl font-bold text-amber-500 md:justify-start md:text-left md:text-2xl xl:text-3xl">
          {Title}
        </h2>
        <h3 className="text-lg font-semibold md:text-xl xl:text-2xl">
          {Actors}
        </h3>
        <h3 className="md:text-md text-sm text-slate-800/80 dark:text-slate-100/80 xl:text-lg">
          {Writer}
        </h3>
        <div className="flex items-center justify-center space-x-4 text-base md:justify-start">
          <CgAwards className="hidden text-3xl text-amber-500 md:inline" />{" "}
          <p className="md:text-md text-sm text-slate-800/90 dark:text-slate-100/90 xl:text-lg">
            {Awards}
          </p>
        </div>
        <div className="flex items-center justify-between space-x-8 md:justify-start">
          <span>Rated: {Rated}</span>
          <div className="flex items-center space-x-1">
            <IoTime /> <span>{Runtime}</span>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-8 md:justify-start">
          <span>{Released}</span>
          <div className="flex items-center gap-x-2">
            <span className="text-yellow-400">
              <FaStar />
            </span>
            {imdbRating}
          </div>
        </div>
        <p className="md:text-md text-sm text-slate-800/60 dark:text-slate-100/60 xl:text-lg">
          {Plot}
        </p>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <IoLanguage className="hidden md:inline" /> <p>{Language}</p>
        </div>
        <span>{Country}</span>
        <h3 className="text-lg font-semibold md:text-xl xl:text-2xl">
          {Genre}
        </h3>
      </div>
    </div>
  );
};

export default MovieDetails;
