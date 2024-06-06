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

  // return (
  //   <div style={styles.container}>
  //     <form
  //       onSubmit={(event) => {
  //         handleSubmit(event);
  //       }}
  //     >
  //       <input
  //         type="text"
  //         placeholder="Add your Todo"
  //         style={styles.formInput}
  //         // Tambahkan event handler "onChange"
  //         onChange={(event) => {
  //           handleChangeTitle(event);
  //         }}
  //         value={title} // Atur nilai dari input sesuai dengan state  "title"
  //       />
  //       <button style={styles.button}>Add Todo</button>
  //     </form>
  //   </div>
  // );
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

const styles = {
  container: {
    marginBottom: "32px",
  },
  formInput: {
    height: "66px",
    width: "40%",
    fontSize: "16px",
    padding: "0 16px",
  },
  button: {
    height: "72px",
    fontSize: "16px",
  },
};

export default TodoForm;
