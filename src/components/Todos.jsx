import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
    <div className=" mx-auto">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
};

export default Todos;
