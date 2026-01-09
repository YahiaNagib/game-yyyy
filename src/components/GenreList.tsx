import { Heading, HStack, Image } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data: genres } = useGenres();

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
              {genre.name}
            </HStack>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
