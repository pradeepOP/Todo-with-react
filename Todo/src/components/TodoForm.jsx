import React, { useContext, useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <div className="mb-4">
      <form onSubmit={add} className="flex gap-x-1">
        <input
          type="text"
          placeholder="Write Todo...."
          className="w-full tracking-wider  text-gray-100 border border-primary rounded-lg px-3 outline-none py-2 duration-150 bg-primaryLight shadow-lg placeholder:text-gray-100 "
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button
          type="submit"
          className="rounded-lg px-3 py-1 bg-buttonColor text-md text-gray-200 hover:bg-buttonColorLight">
          ➕
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
