import Image from "next/image";
import { FaStar } from "react-icons/fa";
import LinkButton from "../ui/link-button";

const MovieItem = ({ movie }) => {
  const languages = movie.Language.split(",");
  const language =
    languages.length > 2
      ? languages.slice(0, 2).join(", ") + " ..."
      : languages.join(", ");
  return (
    <div className="group flex h-[650px] w-full flex-col items-center gap-4 overflow-hidden rounded-xl bg-slate-600/5 text-center shadow-xl transition-all duration-500 hover:bg-slate-600/10 dark:bg-slate-100/5 dark:hover:bg-slate-100/10 md:w-[300px] md:items-start md:text-left">
      <div className="h-[300px] w-full">
        <Image
          src={movie.Poster}
          alt={movie.Title}
          width={500}
          height={500}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-between gap-2 p-4 md:items-start">
        <h1 className="text-xl font-bold transition-colors duration-500 group-hover:text-amber-600">
          {movie.Title}
        </h1>
        <p className="text-sm text-slate-800/60 dark:text-slate-100/60">
          {movie.Plot.slice(0, 70) + "..."}
        </p>
        <span className="">{movie.Country}</span>
        <span className="">{language}</span>
        <div className="flex w-full items-center justify-between">
          <span>{movie.Released}</span>
          <div className="flex items-center gap-x-2">
            <span className="text-yellow-400">
              <FaStar />
            </span>
            {movie.imdbRating}
          </div>
        </div>
        <LinkButton link={`/${movie.imdbID}`}>Details</LinkButton>
      </div>
    </div>
  );
};

export default MovieItem;
