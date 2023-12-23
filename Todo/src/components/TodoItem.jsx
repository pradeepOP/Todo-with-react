import React, { useState } from "react";
import { useTodo } from "../context";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todo.todoMsg });
    setIsTodoEditable(false);
  };
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex  rounded-lg px-3 py-2 gap-x-3 shadow-lg  duration-300 text-gray-100 ${
        todo.completed ? "bg-secondary" : "bg-primaryLight"
      }`}>
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      <input
        type="text"
        className={`tracking-wider outline-none w-full duration-300 bg-primaryLight px-2 ${
          isTodoEditable ? "border-black/10" : "border-transparent"
        } ${todo.completed ? "line-through bg-secondary" : ""}  `}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm justify-center items-center disabled:opacity-50 bg-buttonColor"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}>
        {isTodoEditable ? "📁" : "✏️"}
      </button>

      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm justify-center items-center bg-buttonColor "
        onClick={() => deleteTodo(todo.id)}>
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
