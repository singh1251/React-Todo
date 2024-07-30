import { Box, Divider, Text, VStack } from "@chakra-ui/react";
import TodoListItem from "./TodoListItem";

function TodoList({ todos, deleteTodo, clickedCheckbox, updateTodo }) {
  //checking if there are no todos and returning appropriate component
  if (todos.length === 0) {
    return (
      <>
        <VStack marginY={5} w={"full"} maxH={"300px"} overflowY={"auto"}>
          <Text fontSize={"2xl"} fontWeight={"400"}>
            List of todos
          </Text>
          <Divider marginBottom={3} />

          <Text fontSize={"lg"} color={"gray.400"}>
            No Todos
          </Text>
        </VStack>
      </>
    );
  }

  return (
    <Box w={"full"} mt={1} mb={4}>
      <Text fontSize={"lg"} fontWeight={"500"}>
        List of Todos
      </Text>

      <Divider borderColor={"gray.300"} mt={1} mb={4} />

      <VStack w={"full"} h={"300px"} overflowY={"auto"} pr={2}>
        {todos.map((todo, idx) => (
          <TodoListItem
            key={idx}
            todo={todo}
            deleteTodo={deleteTodo}
            clickedCheckbox={clickedCheckbox}
            updateTodo={updateTodo}
          />
        ))}
      </VStack>
    </Box>
  );
}
export default TodoList;
