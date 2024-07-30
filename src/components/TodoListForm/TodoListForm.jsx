import {
  Box,
  Button,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

function TodoListForm({ addTodo }) {
  const [todoInfo, setTodoInfo] = useState({ title: "", description: "" });

  //for handaling the inputs fields and setting the state
  const handleChange = (evt) => {
    setTodoInfo((currInfo) => ({
      ...currInfo,
      [evt.target.name]: evt.target.value,
    }));
  };

  //checking if the todo title is empty (used for disabling the "Add Todo" button)
  const isTodoTitleEmpty = !todoInfo.title;

  return (
    <Box w={"full"} my={3}>
      <Text fontSize={"lg"} fontWeight={"500"} mb={1}>
        Add Todos
      </Text>
      <VStack w={"full"}>
        {/* todo title */}
        <Input
          size={"sm"}
          borderRadius={5}
          variant={"filled"}
          focusBorderColor="green.500"
          type="text"
          placeholder="Enter title"
          name="title"
          value={todoInfo.title}
          onChange={(evt) => handleChange(evt)}
        />

        {/* todo description */}
        <Textarea
          size={"sm"}
          borderRadius={5}
          variant={"filled"}
          resize={"none"}
          focusBorderColor="green.500"
          placeholder="Enter description...."
          name="description"
          value={todoInfo.description}
          onChange={(evt) => handleChange(evt)}
        />

        {/* add todo functionality */}
        <Button
          size={"sm"}
          w={"10rem"}
          colorScheme="green"
          isDisabled={isTodoTitleEmpty ? true : false}
          onClick={() => {
            addTodo(todoInfo);
            setTodoInfo({ title: "", description: "" });
          }}
        >
          Add Todo
        </Button>
      </VStack>
    </Box>
  );
}
export default TodoListForm;
