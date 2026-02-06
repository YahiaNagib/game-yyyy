import useTrailers from "../hooks/useTrailers";
import React from "react";

const GameTrailer = (props: { id: number }) => {
  const { data: trailers, isLoading, error } = useTrailers(props.id);

  if (trailers) console.log(trailers);

  if (isLoading) return null;

  if (error) throw error;

  return trailers?.results[0] ? (
    <video src={trailers?.results[0]?.data[480]} poster={trailers?.results[0]?.preview} controls />
  ) : null;
};

export default GameTrailer;
