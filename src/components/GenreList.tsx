import { Heading, HStack, Image, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data: genres, isLoading } = useGenres();

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  return (
    <>
      <Heading marginBottom={"10px"} padding={"10px 0"} fontSize={"30px"} fontWeight={"bold"}>
        Genres
      </Heading>
      {isLoading && <Spinner />}
      <ul>
        {genres?.results.map((genre) => (
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
                onClick={() => setSelectedGenreId(genre.id)}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
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
