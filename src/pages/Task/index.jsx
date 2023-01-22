import React, { Fragment, useEffect, useState } from "react";
import { useRef } from "react";
import Loading from "../../components/Loading";
import { Button, Input } from "../../sharedStyles";
import {
  Body,
  Dropdown,
  DropdownButton,
  Head,
  DropdownValue,
  TaskBox,
  Title,
} from "./styles";
import tasksFromServer from "./task.json";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

const Task = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [tasksDropdown, setTasksDropdown] = useState([]);
  const [filteringTasks, setFilteringTasks] = useState(false);
  const [showOptionsBubbleById, setShowOptionsBubbleById] = useState("");
  const [calendarValue, setCalendarValue] = useState("");
  const [showEditDescriptionInputById, setShowEditDescriptionInputById] =
    useState("");
  const componentRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setTasks(tasksFromServer);
      setTasksDropdown(tasksFromServer);
    }, 2000);
  }, []);

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (
  //       componentRef.current &&
  //       !componentRef.current.contains(event.target)
  //     ) {
  //       alert("ok");
  //       setShowEditDescriptionInputById("");
  //     }
  //   }
  //   // Bind the event listener
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     // Unbind the event listener on clean up
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // });

  function handleCollapse(id) {
    const element = document.getElementById(`body-${id}`);
    const elementStyleDisplay = element.currentStyle
      ? element.currentStyle["display"]
      : window.getComputedStyle
      ? window.getComputedStyle(element, null).getPropertyValue("display")
      : null;
    if (elementStyleDisplay === "none") {
      element.style.display = "block";
      return;
    }
    element.style.display = "none";
  }
  function handleFilter(id) {
    setOpenDropdown(false);
    setFilteringTasks(true);
    setTimeout(() => {
      setTasks([tasksFromServer.find((x) => x.id === id)]);
      setFilteringTasks(false);
    }, 1500);
  }

  function handleFinishTodo(id) {
    const updatedTodos = tasks.map((task) => {
      return task.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isFinished: !todo.isFinished };
        }
        return { ...todo };
      });
    });
    const updatedTasks = tasks.map((task, i) => {
      return { ...task, todos: updatedTodos[i] };
    });
    setTasks(updatedTasks);
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
        };
        return { ...task, todos: [...task.todos, params] };
      }
      return { ...task };
    });
    setTasks(newTodo);
    // const updatedTasks = tasks.map((task, i) => {
    //   return { ...task, todos: addTodos[i] };
    // });
    // setTasks({ ...task, chats: [...inbox.chats, params] });
    // setTasks(updatedTasks);
  }
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
  function handleUpdateTodoName(id, value) {
    const updatedTodos = tasks.map((task) => {
      return task.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, name: value };
        }
        return { ...todo };
      });
    });
    const updatedTasks = tasks.map((task, i) => {
      return { ...task, todos: updatedTodos[i] };
    });
    setTasks(updatedTasks);
  }

  function handleUpdateCalendar(id, value) {
    const updatedTodos = tasks.map((task) => {
      return task.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, createdAt: value };
        }
        return { ...todo };
      });
    });
    const updatedTasks = tasks.map((task, i) => {
      return { ...task, todos: updatedTodos[i] };
    });
    setTasks(updatedTasks);
  }
  function handleDeleteTodo(id) {
    const updatedTodos = tasks.map((task) => {
      return task.todos.filter((todo) => {
        return todo.id !== id;
      });
    });
    const updatedTasks = tasks.map((task, i) => {
      return { ...task, todos: updatedTodos[i] };
    });
    setTasks(updatedTasks);
  }

  return (
    <TaskBox ref={componentRef}>
      <Head>
        <Dropdown>
          <DropdownButton
            onClick={() => tasks && setOpenDropdown(!openDropdown)}
          >
            My Tasks x
          </DropdownButton>
          {openDropdown && (
            <>
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
            </>
          )}
        </Dropdown>
        <Button onClick={() => handleAddTodo()}>New Task</Button>
      </Head>
      {tasks.length && !filteringTasks ? (
        tasks.map((task) => (
          <Fragment key={task.id}>
            {task.todos.map((todo) => {
              return (
                <div key={todo.id} style={{ marginBottom: "22px" }}>
                  <div style={{ display: "flex" }}>
                    <input
                      onClick={() => handleFinishTodo(todo.id)}
                      type="checkbox"
                      defaultChecked={todo.isFinished}
                    />
                    <div
                      style={{
                        background: "white",
                        padding: 2,
                        position: "relative",
                      }}
                    >
                      {/* Head */}
                      <div style={{ display: "flex" }}>
                        {todo.name ? (
                          <Title
                            id={`title-${todo.id}`}
                            isFinished={todo.isFinished}
                          >
                            {todo.name}
                          </Title>
                        ) : (
                          <input
                            onBlur={(e) =>
                              handleUpdateTodoName(todo.id, e.target.value)
                            }
                            type="text"
                          />
                        )}

                        <p style={{ color: "#EB5757" }}>
                          {!todo.isFinished &&
                            todo.daysLeft &&
                            `${todo.daysLeft} Days Left`}
                        </p>
                        <p>
                          {todo.createdAt &&
                            dayjs(todo.createdAt).format("DD/MM/YYYY")}
                        </p>
                        <div onClick={() => handleCollapse(todo.id)}>^</div>
                        <div
                          onClick={() =>
                            setShowOptionsBubbleById((showOptionsBubbleById) =>
                              showOptionsBubbleById === todo.id ? "" : todo.id
                            )
                          }
                        >
                          ...
                        </div>
                        {showOptionsBubbleById === todo.id && (
                          <div
                            style={{
                              position: "absolute",
                              right: 0,
                              top: "30px",
                            }}
                          >
                            <span onClick={() => handleDeleteTodo(todo.id)}>
                              Delete
                            </span>
                          </div>
                        )}
                      </div>
                      {/* Head */}
                      {/* <div id={todo.id} style={{}}> */}
                      <Body id={`body-${todo.id}`} isFinished={todo.isFinished}>
                        <div style={{ display: "flex" }}>
                          <p style={{ marginRight: "19.67px" }}>C</p>
                          <div id="date-picker" style={{ background: "green" }}>
                            <input
                              type="text"
                              defaultValue={
                                todo.createdAt
                                  ? dayjs(todo.createdAt).format("DD/MM/YYYY")
                                  : "Set Date"
                              }
                              id={`calendar-${todo.id}`}
                              onClick={() => {
                                document
                                  .getElementById(`date-picker-${todo.id}`)
                                  .showPicker();
                              }}
                              readOnly
                            />
                            <input
                              type="date"
                              style={{ visibility: "hidden" }}
                              id={`date-picker-${todo.id}`}
                              value={
                                calendarValue
                                  ? calendarValue
                                  : dayjs(todo.createdAt).format("YYYY-DD-MM")
                              }
                              onChange={(e) => {
                                handleUpdateCalendar(todo.id, e.target.value);
                                setCalendarValue(e.target.value);
                                document.getElementById(
                                  `calendar-${todo.id}`
                                ).value = dayjs(e.target.value).format(
                                  "DD/MM/YYYY"
                                );
                              }}
                            />
                          </div>
                        </div>
                        <div style={{ display: "flex" }}>
                          <p style={{ marginRight: "19.67px" }}>P</p>
                          {showEditDescriptionInputById === todo.id ? (
                            <textarea
                              onBlur={(e) =>
                                handleUpdateTodoDescription(
                                  todo.id,
                                  e.target.value
                                )
                              }
                              defaultValue={todo.description}
                            />
                          ) : (
                            <p
                              onClick={() =>
                                setShowEditDescriptionInputById(todo.id)
                              }
                            >
                              {todo.description
                                ? todo.description
                                : "No Description"}
                            </p>
                          )}
                        </div>
                      </Body>
                    </div>
                  </div>
                </div>
              );
            })}
          </Fragment>
        ))
      ) : (
        <>
          <Loading title="Loading Tasks" />
        </>
      )}
    </TaskBox>
  );
};

function useOutsideClick(ref, onClickOut) {
  useEffect(() => {
    const onClick = ({ target }) => !ref.contains(target) && onClickOut?.();
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}

export default Task;
