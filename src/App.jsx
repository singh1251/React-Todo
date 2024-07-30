import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSearchParams } from "react-router-dom";
import { Center, Flex, Heading } from "@chakra-ui/react";

import TodoListForm from "./components/TodoListForm/TodoListForm";
import TodoSearchForm from "./components/TodoSearchForm/TodoSearchForm";
import TodoList from "./components/TodoList/TodoList";
import todoData from "./data/todos.json";

//function to get Todos saved in localStorage
const getTodosFromLocalStorage = () => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : todoData;
};

function App() {
  //state for all the todos
  const [todos, setTodos] = useState(getTodosFromLocalStorage);

  //setting the todos to localStorage everytime the state "todos" changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //using the useSearchParams hook by react-router-dom
  const [searchParams, setSearchParams] = useSearchParams();

  //extracting the search term from the searchParams
  const searchTerm = searchParams.get("search") || "";

  //filtering the todos based on the searchTerm
  const filteredTodos = todos.filter(
    (todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      todo.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //the search functionality
  const handleSearch = (term) => {
    if (term) {
      setSearchParams({ search: term });
    } else {
      setSearchParams({});
    }
  };

  //function to add new-todo to the existing "todos"
  const addTodo = (newTodo) => {
    if (!newTodo.description) newTodo.description = "No description provided";
    setTodos((currTodos) => [
      ...currTodos,
      {
        ...newTodo,
        id: uuidv4(),
        isCompleted: false,
        lastUpdated: new Date().toISOString(),
      },
    ]);
  };

  //updating the todos (the edit functionality)
  const updateTodo = (ID, updatedTodo) => {
    setTodos((currTodos) => {
      return currTodos.map((todo) => {
        if (todo.id === ID) {
          return {
            ...todo,
            ...updatedTodo,
            lastUpdated: new Date().toISOString(),
          };
        }
        return todo;
      });
    });
  };

  //deleting specific todos
  const deleteTodo = (ID) => {
    setTodos((currTodos) => {
      return currTodos.filter((todo) => todo.id !== ID);
    });
  };

  //monitoring the state of the checkboxes
  //and mapping it with the "isCompleted"  aspect of todos
  const clickedCheckbox = (ID) => {
    setTodos((currTodos) => {
      return currTodos.map((todo) => {
        if (todo.id === ID) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    });
  };

  return (
    <>
      <Center
        h={"100vh"}
        bgGradient="linear(to-b, blue.400, blue.100, blue.50)"
      >
        <Flex
          w={{ base: "80%", md: "700px" }}
          border={"1px solid black"}
          px={3}
          wrap={"wrap"}
          bg={"#f8f9fa"}
          borderRadius={10}
          boxShadow={"2xl"}
        >
          <Heading
            size={"xl"}
            w={"full"}
            textAlign={"center"}
            py={1}
            mb={4}
            borderRadius={5}
          >
            Task Manager
          </Heading>

          <TodoSearchForm handleSearch={handleSearch} />

          <TodoListForm addTodo={addTodo} />

          <TodoList
            todos={filteredTodos}
            deleteTodo={deleteTodo}
            clickedCheckbox={clickedCheckbox}
            updateTodo={updateTodo}
          />
        </Flex>
      </Center>
    </>
  );
}

export default App;
