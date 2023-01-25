import React, { useState } from "react";
import Button from "../../../components/Button";
import { ArrowDownWardIcon } from "../../../icons";
import {
  Dropdown,
  DropdownButton,
  DropdownText,
  DropdownValues,
  Head,
  DropdownValue,
} from "./styles";
import tasksFromServer from "../task.json";

const TaskHead = ({ tasks, setTasks, setFilteringTasks, tasksDropdown }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  function handleFilter(id) {
    setOpenDropdown(false);
    setFilteringTasks(true);
    setTimeout(() => {
      setTasks([tasksFromServer.find((x) => x.id === id)]);
      setFilteringTasks(false);
    }, 1500);
  }

  function handleAddTodo() {
    const newTodo = tasks.map((task, i) => {
      if (task.id === tasks[0].id) {
        const params = {
          id: crypto.randomUUID(),
          taskId: tasks[0].id,
          name: "",
          message: "",
          createdAt: "",
          daysLeft: "",
          stickers: [],
        };
        return { ...task, todos: [...task.todos, params] };
      }
      return { ...task };
    });
    setTasks(newTodo);
  }

  return (
    <Head>
      <Dropdown>
        <DropdownButton onClick={() => tasks && setOpenDropdown(!openDropdown)}>
          <DropdownText>My Tasks</DropdownText>
          <ArrowDownWardIcon />
        </DropdownButton>
        {openDropdown && (
          <DropdownValues>
            {tasksDropdown.map((task) => (
              <DropdownValue
                onClick={() => {
                  handleFilter(task.id);
                }}
                key={task.id}
              >
                {task.name}
              </DropdownValue>
            ))}
          </DropdownValues>
        )}
      </Dropdown>
      <Button onClick={() => handleAddTodo()}>New Task</Button>
    </Head>
  );
};

export default TaskHead;
