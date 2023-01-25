import React, { useState } from "react";
import { PenIcon } from "../../../../icons";
import {
  Description,
  DescriptionContainer,
  DescriptionTextArea,
  PenIconContainer,
} from "./style";

const DescriptionSection = ({ tasks, setTasks, todo }) => {
  const [showEditDescriptionInputById, setShowEditDescriptionInputById] =
    useState("");

  function handleUpdateTodoDescription(id, value) {
    setShowEditDescriptionInputById("");
    const updatedTodos = tasks.map((task) => {
      return task.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, description: value };
        }
        return { ...todo };
      });
    });
    const updatedTasks = tasks.map((task, i) => {
      return { ...task, todos: updatedTodos[i] };
    });
    setTasks(updatedTasks);
  }

  return (
    <DescriptionContainer>
      <PenIconContainer
        onClick={() => setShowEditDescriptionInputById(todo.id)}
      >
        <PenIcon
          style={{ width: 15, height: 15 }}
          stroke={todo.description && "#2F80ED"}
        />
      </PenIconContainer>
      {showEditDescriptionInputById === todo.id ? (
        <DescriptionTextArea
          onBlur={(e) => handleUpdateTodoDescription(todo.id, e.target.value)}
          defaultValue={todo.description}
        />
      ) : (
        <Description onClick={() => setShowEditDescriptionInputById(todo.id)}>
          {todo.description ? todo.description : "No Description"}
        </Description>
      )}
    </DescriptionContainer>
  );
};

export default DescriptionSection;
