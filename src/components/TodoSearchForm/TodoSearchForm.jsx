import { Box, Button, HStack, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

function TodoSearchForm({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Box w={"full"} mb={1}>
      <HStack w={"full"}>
        {/* input field for "searching" */}
        <Input
          size={"sm"}
          borderRadius={5}
          variant={"filled"}
          type="text"
          placeholder="Search todos"
          value={searchTerm}
          onChange={(evt) => setSearchTerm(evt.target.value)}
        />

        {/* search functionality */}
        <Button
          size={"sm"}
          onClick={() => handleSearch(searchTerm)}
          w={"10rem"}
          colorScheme="blue"
        >
          Search
        </Button>

        {/* reset functionality */}
        <Button
          size={"sm"}
          onClick={() => {
            handleSearch("");
            setSearchTerm("");
          }}
          w={"10rem"}
          colorScheme="red"
        >
          Reset
        </Button>
      </HStack>
    </Box>
  );
}
export default TodoSearchForm;
