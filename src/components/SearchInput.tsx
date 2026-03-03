import useGameQueryStore from "../store";
import { Input, InputGroup } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  // const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Set a timer to make the API call after 500ms

    const handler = setTimeout(() => {
      // if (ref.current && ref.current.value) {
      // API call here
      setSearchText(inputValue);
      // }
    }, 500);

    // Clear timeout if query changes before 500ms
    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  return (
    <form
      style={{ width: "100%" }}
      // onChange={(e) => {
      //   e.preventDefault();
      //   navigate("/");
      //   // if (ref.current) setSearchText(ref.current.value);
      // }}
      // onSubmit={(e) => {
      //   e.preventDefault();
      // }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          onChange={(e) => {
            setInputValue(e.target.value);
            // If you truly need to navigate immediately on the very first keystroke:
            // if (window.location.pathname !== "/") navigate("/");
          }}
          borderRadius={20}
          placeholder="Search games..."
          variant="subtle"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
