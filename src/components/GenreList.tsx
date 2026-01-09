import { Heading, HStack, Image, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { useState } from "react";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres, isLoading } = useGenres();

  return (
    <>
      <Heading
        marginBottom={"10px"}
        padding={"10px 0"}
        fontSize={"30px"}
        fontWeight={"bold"}
      >
        Genres
      </Heading>
      {isLoading && <Spinner />}
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>
            <HStack key={genre.id} alignItems={"center"} marginBottom={"10px"}>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                width={"35px"}
                height={"35px"}
                borderRadius={"10px"}
              />
              <Text
                _hover={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                onClick={() => onSelectGenre(genre)}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Text>
            </HStack>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
