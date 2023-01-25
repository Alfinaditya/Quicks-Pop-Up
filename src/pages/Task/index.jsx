import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { TaskBox } from "./styles";
import tasksFromServer from "./task.json";
import stickersFromServer from "./sticker.json";
import TaskHead from "./Head";
import TaskBody from "./Body";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [stickers, setStickers] = useState([]);
  const [tasksDropdown, setTasksDropdown] = useState([]);
  const [filteringTasks, setFilteringTasks] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTasks(tasksFromServer);
      setTasksDropdown(tasksFromServer);
      setStickers(stickersFromServer);
    }, 2000);
  }, []);

  return (
    <TaskBox>
      <TaskHead
        tasks={tasks}
        setTasks={setTasks}
        setFilteringTasks={setFilteringTasks}
        tasksDropdown={tasksDropdown}
      />
      <TaskBody
        tasks={tasks}
        setTasks={setTasks}
        filteringTasks={filteringTasks}
        stickers={stickers}
        setStickers={setStickers}
      />
    </TaskBox>
  );
};

export default Task;
