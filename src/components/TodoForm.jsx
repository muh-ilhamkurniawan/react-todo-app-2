import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  // Definisikan state "title"
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title); // Meneruskan title sebagai parameter ke addTodo
    setTitle(""); // Reset title-nya
  };

  // Definisikan function "handleChangeTitle"
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  // Periksa apakah function "handleChangeTitle" berfungsi
  console.log(title);

  return (
    <div className="mb-8">
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          type="text"
          placeholder="Add your Todo"
          className="w-4/5 h-16 text-base px-4 mx-4"
          onChange={(event) => {
            handleChangeTitle(event);
          }}
          value={title}
        />
        <button className="w-1/7 h-18 text-base bg-blue-600 text-white px-4 py-5 rounded">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
