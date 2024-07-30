# React Todo List Application

## Overview

This is a modern, responsive Todo List application built with React and enhanced with Chakra UI. It offers a clean, intuitive interface for managing daily tasks with persistent storage and real-time search functionality.

## System Design

The application follows a component-based architecture typical of React applications:

1. **App Component**: The main component that manages the overall state and renders child components.
2. **TodoListForm**: Handles the creation of new todo items.
3. **TodoSearchForm**: Manages the search functionality.
4. **TodoList**: Renders the list of todo items.
5. **TodoItem**: Represents individual todo items with edit and delete capabilities.

State management is handled using React's useState hook, with localStorage for data persistence.

## Implementation

Key aspects of the implementation include:

- **React Hooks**: useState for state management, useEffect for side effects like localStorage updates.
- **Chakra UI**: Used for styling components and ensuring a responsive design.
- **UUID**: Generates unique IDs for new todo items.
- **React Router**: Manages URL parameters for the search functionality.
- **LocalStorage**: Ensures data persistence across browser sessions.

## Features

- **Create Tasks**: Easily add new tasks to your list.
- **Update Tasks**: Edit existing tasks to update their details.
- **Mark as Completed**: Toggle tasks between different states.
- **Delete Tasks**: Remove tasks that are completed or no longer needed.
- **Search Functionality**: Real-time filtering of todos based on search input.
- **Persistent Storage**: Tasks are saved in the browser's local storage, persisting between sessions.
- **Responsive Design**: Fully responsive layout that works on desktop and mobile devices.

## Technology Stack

- React
- Chakra UI for styled components
- React Router for URL-based filtering
- LocalStorage for data persistence

## Setup and Running the Application

### Prerequisites

- Node.js (version 12.0 or later)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository:

- git clone https://github.com/singh1251/React-Todo.git

2. Navigate to the project directory:

- cd React-Todo

3. Install dependencies:

- npm install

4. Start the development server:

- npm run dev

5. Open [http://localhost:51XX] to view the app in your browser.

## Usage

- **Adding a Todo**: Enter todo details in the input field and submit.
- **Editing a Todo**: Click on the Edit button to edit details.
- **Completing a Todo**: Toggle the checkbox next to a todo.
- **Deleting a Todo**: Click the Delete button to remove a todo.
- **Searching Tasks**: Use the search bar to filter the todos by title or description.

## Development

This project was bootstrapped with Vite, providing a minimal setup to get React working with HMR (Hot Module Replacement) and some ESLint rules.

### Vite Plugins

Two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

For more information on Vite, check out the [Vite documentation](https://vitejs.dev/).
