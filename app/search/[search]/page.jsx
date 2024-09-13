import MoviesSearchResult from "@/components/movies/movies-search-result";
import React from "react";

const SearchPage = ({ params }) => {
  const { search } = params;
  return (
    <>
      <MoviesSearchResult search={search} />
    </>
  );
};

export default SearchPage;
