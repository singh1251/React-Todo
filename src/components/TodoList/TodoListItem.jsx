import {
  Button,
  Checkbox,
  Flex,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

function TodoListItem({ todo, deleteTodo, clickedCheckbox, updateTodo }) {
  //state for handaling the expansion and collapse of the todo description
  const [isExpanded, setIsExpanded] = useState(false);

  //state for monitoring the editing process
  const [isEditing, setIsEditing] = useState(false);

  //state for handaling the updation of the todo
  const [updatedTodo, setUpdatedTodo] = useState({
    title: todo.title,
    description: todo.description,
  });

  //for handaling the input fields and setting the state with the updated info
  const handleChange = (evt) => {
    setUpdatedTodo((curr) => ({
      ...curr,
      [evt.target.name]: evt.target.value,
    }));
  };

  return (
    <Flex w={"full"} direction={"column"} mb={2}>
      <Flex
        w={"full"}
        alignItems={"center"}
        justifyContent={"space-between"}
        bg={isExpanded && "gray.100"}
      >
        <Flex gap={4}>
          {/* task completed or not */}
          <Checkbox
            onChange={() => clickedCheckbox(todo.id)}
            checked={todo.isCompleted}
            borderColor={"gray.400"}
          />

          {/* if we are in the editing state render the input element
           else render the todo title content */}
          {isEditing ? (
            <Input
              size={"sm"}
              borderRadius={5}
              border={"1px solid #ced4da"}
              type="text"
              name="title"
              value={updatedTodo.title}
              onChange={(evt) => handleChange(evt)}
            />
          ) : (
            <Text
              cursor={"pointer"}
              onClick={() => setIsExpanded((curr) => !curr)}
              textDecoration={todo.isCompleted ? "line-through" : "none"}
            >
              {todo.title}
            </Text>
          )}
        </Flex>

        <Flex gap={4}>
          {/* if we are in the editing state the button should say "Save"
             else it should say "Edit" */}
          {isEditing ? (
            <Button
              size={"sm"}
              onClick={() => {
                updateTodo(todo.id, updatedTodo);
                setIsEditing(false);
              }}
              colorScheme="blue"
            >
              Save
            </Button>
          ) : (
            <Button
              size={"sm"}
              onClick={() => {
                setIsExpanded(true);
                setIsEditing(true);
              }}
              colorScheme="blue"
              isDisabled={todo.isCompleted}
            >
              Edit
            </Button>
          )}

          {/* for deleting the todo */}
          <Button
            size={"sm"}
            onClick={() => {
              setIsExpanded(false);
              deleteTodo(todo.id);
            }}
            colorScheme="red"
          >
            Delete
          </Button>
        </Flex>
      </Flex>

      {/* this component will only be rendered when we are in the expanded state */}
      {isExpanded && (
        <Flex w={"full"} direction={"column"} bg={"gray.100"} padding={2}>
          {isEditing ? (
            <Textarea
              size={"sm"}
              borderRadius={5}
              border={"1px solid #ced4da"}
              name="description"
              value={updatedTodo.description}
              onChange={(evt) => handleChange(evt)}
            />
          ) : (
            <Text textDecoration={todo.isCompleted ? "line-through" : "none"}>
              {todo.description}
            </Text>
          )}

          {!isEditing && !todo.isCompleted && (
            <Text fontSize={"sm"} color={"gray.400"} marginTop={2}>
              Last updated: {new Date(todo.lastUpdated).toLocaleString()}
            </Text>
          )}
        </Flex>
      )}
    </Flex>
  );
}
export default TodoListItem;
