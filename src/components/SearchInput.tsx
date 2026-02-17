import useGameQueryStore from "../store";
import { Input, InputGroup } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  const value = ref.current?.value;

  useEffect(() => {
    // Set a timer to make the API call after 500ms

    const handler = setTimeout(() => {
      if (ref.current && ref.current.value) {
        // API call here
        setSearchText(ref.current.value);
      }
    }, 500);

    // Clear timeout if query changes before 500ms
    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return (
    <form
      style={{ width: "100%" }}
      onChange={(e) => {
        e.preventDefault();
        navigate("/");
        // if (ref.current) setSearchText(ref.current.value);
      }}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input ref={ref} borderRadius={20} placeholder="Search games..." variant="subtle" />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
