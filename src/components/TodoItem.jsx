import React from "react";

const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
  const getTodoTitleStyle = () => {
    return { textDecoration: todo.completed ? "line-through" : "none" };
  };

  return (
    <div className="border-2 h-16 border-gray-200 text-lg flex justify-between items-center px-5 my-3 shadow-lg rounded-lg">
      <input type="checkbox" className="h-4 w-4" onChange={() => toggleCompleted(todo.id)} checked={todo.completed} />
      <div>
        <p style={getTodoTitleStyle()}>{todo.title}</p>
        {todo.completed && <small>Completed at: {new Date(todo.completedAt).toLocaleTimeString("default", { hour12: false })}</small>}
      </div>
      <button className="bg-red-700 text-white h-8 w-8 rounded-full border-none cursor-pointer text-base flex items-center justify-center" onClick={() => deleteTodo(todo.id)}>
        x
      </button>
    </div>
  );
};

export default TodoItem;
