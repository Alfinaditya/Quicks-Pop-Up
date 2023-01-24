import React, { Fragment, useEffect, useState } from "react";
import { useRef } from "react";
import Loading from "../../components/Loading";
import {
  Body,
  Dropdown,
  DropdownButton,
  Head,
  DropdownValue,
  TaskBox,
  Title,
  DropdownValues,
  Description,
  DatePicker,
  DatePickerInput,
  TitleInput,
  DropdownText,
  TaskItem,
  TaskItemContainer,
} from "./styles";
import tasksFromServer from "./task.json";
import stickersFromServer from "./sticker.json";
import dayjs from "dayjs";
import Button from "../../components/Button";
import {
  BookMarkIcon,
  CalendarIcon,
  ClockIcon,
  PenIcon,
  ExpandMoreIcon,
  OptionsIcon,
  ArrowDownWardIcon,
  ArrowUpWardIcon,
} from "../../icons";

const Task = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [stickers, setStickers] = useState([]);
  const [tasksDropdown, setTasksDropdown] = useState([]);
  const [filteringTasks, setFilteringTasks] = useState(false);
  const [showOptionsBubbleById, setShowOptionsBubbleById] = useState("");
  const [showStickersBubbleById, setShowStickersBubbleById] = useState("");
  const [calendarValue, setCalendarValue] = useState("");
  const [showEditDescriptionInputById, setShowEditDescriptionInputById] =
    useState("");
  const componentRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setTasks(tasksFromServer);
      setTasksDropdown(tasksFromServer);
      setStickers(stickersFromServer);
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
    const upwardIcon = document.getElementById(`arrow-upward-icon-${id}`);
    const downwardIcon = document.getElementById(`arrow-downward-icon-${id}`);

    const elementStyleDisplay = getCurrentElementStyleDisplay(element);
    const upwardStyleDisplay = getCurrentElementStyleDisplay(upwardIcon);
    const downwardStyleDisplay = getCurrentElementStyleDisplay(downwardIcon);

    //arrow Icon
    if (upwardStyleDisplay === "block" && downwardStyleDisplay === "none") {
      upwardIcon.style.display = "none";
      downwardIcon.style.display = "block";
    } else {
      upwardIcon.style.display = "block";
      downwardIcon.style.display = "none";
    }

    // Collpase Container
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
          stickers: [],
        };
        return { ...task, todos: [...task.todos, params] };
      }
      return { ...task };
    });
    setTasks(newTodo);
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

  function handleAddSticker(id, stickerId) {
    const sticker = stickers.find((sticker) => sticker.id === stickerId);

    const updatedTodos = tasks.map((task) => {
      return task.todos.map((todo) => {
        if (todo.id === id) {
          // To Check if Current Todos sticker contains duplicate value
          if (todo.stickers.find((st) => st.id === sticker.id)) {
            return { ...todo };
          }
          return { ...todo, stickers: [...todo.stickers, sticker] };
        }
        return { ...todo };
      });
    });
    const updatedTasks = tasks.map((task, i) => {
      return { ...task, todos: updatedTodos[i] };
    });
    setTasks(updatedTasks);
    setShowStickersBubbleById("");
  }

  return (
    <TaskBox ref={componentRef}>
      <Head>
        <Dropdown>
          <DropdownButton
            onClick={() => tasks && setOpenDropdown(!openDropdown)}
          >
            <DropdownText>My Tasks</DropdownText>
            <ExpandMoreIcon />
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
      {tasks.length && !filteringTasks ? (
        tasks.map((task) => (
          <Fragment key={task.id}>
            {task.todos.map((todo) => {
              return (
                <TaskItem key={todo.id}>
                  <TaskItemContainer>
                    <input
                      style={{ alignSelf: "start", marginTop: 9 }}
                      onClick={() => handleFinishTodo(todo.id)}
                      type="checkbox"
                      defaultChecked={todo.isFinished}
                    />
                    <div
                      style={{
                        background: "white",
                        padding: 2,
                        position: "relative",
                        width: "100%",
                      }}
                    >
                      {/* Head */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginLeft: 23.67,
                        }}
                      >
                        {todo.name ? (
                          <Title
                            id={`title-${todo.id}`}
                            isFinished={todo.isFinished}
                          >
                            {todo.name}
                          </Title>
                        ) : (
                          <TitleInput
                            placeholder="Type Task Title"
                            onBlur={(e) =>
                              handleUpdateTodoName(todo.id, e.target.value)
                            }
                            type="text"
                          />
                        )}

                        <p style={{ color: "#EB5757", fontSize: 13 }}>
                          {!todo.isFinished &&
                            todo.daysLeft &&
                            `${todo.daysLeft} Days Left`}
                        </p>
                        <p
                          style={{
                            fontSize: 13,
                            marginLeft: 15,
                            marginRight: 15,
                          }}
                        >
                          {todo.createdAt &&
                            dayjs(todo.createdAt).format("DD/MM/YYYY")}
                        </p>
                        <div style={{ display: "flex" }}>
                          <div></div>
                          {/* <div
                            style={{ marginRight: 10 }}
                            onClick={() => handleCollapse(todo.id)}
                          >
                            ^
                          </div> */}
                          <div onClick={() => handleCollapse(todo.id)}>
                            <div
                              id={`arrow-upward-icon-${todo.id}`}
                              style={{
                                display: todo.isFinished && "none",
                              }}
                            >
                              <ArrowUpWardIcon />
                            </div>
                            <div
                              id={`arrow-downward-icon-${todo.id}`}
                              style={{
                                display: !todo.isFinished && "none",
                              }}
                            >
                              <ArrowDownWardIcon />
                            </div>
                          </div>
                          <div
                            style={{ marginLeft: 10 }}
                            onClick={() =>
                              setShowOptionsBubbleById(
                                (showOptionsBubbleById) =>
                                  showOptionsBubbleById === todo.id
                                    ? ""
                                    : todo.id
                              )
                            }
                          >
                            <OptionsIcon />
                          </div>
                        </div>
                        {showOptionsBubbleById === todo.id && (
                          <div
                            style={{
                              position: "absolute",
                              right: 0,
                              top: "30px",
                              background: "#FFFFFF",
                              borderRadius: 5,
                              paddingLeft: 18.39,
                              border: "1px solid #828282",
                              height: 43,
                              zIndex: 999,
                              color: "#EB5757",
                              width: 126,
                              display: "flex",
                              alignItems: "center",
                              cursor: "pointer",
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
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: 17.11,
                            marginBottom: 16.22,
                          }}
                        >
                          <div
                            style={{
                              marginRight: 19.67,
                              width: 16.67,
                              height: 16.67,
                            }}
                            onClick={() => {
                              document
                                .getElementById(`date-picker-${todo.id}`)
                                .showPicker();
                            }}
                          >
                            <ClockIcon
                              style={{ width: 16.67, height: 16.67 }}
                              stroke={todo.createdAt && "#2F80ED"}
                            />
                          </div>
                          {/* <p style={{ marginRight: "19.67px" }}>C</p> */}
                          <DatePicker id="date-picker">
                            <div
                              style={{
                                position: "relative",
                                width: "min-content",
                              }}
                            >
                              <DatePickerInput
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
                              <div
                                style={{
                                  position: "absolute",
                                  top: 12,
                                  right: 12,
                                }}
                                onClick={() => {
                                  document
                                    .getElementById(`date-picker-${todo.id}`)
                                    .showPicker();
                                }}
                              >
                                <CalendarIcon />
                              </div>
                            </div>

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
                          </DatePicker>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            marginBottom: 15.6,
                          }}
                        >
                          <div
                            style={{
                              width: 15,
                              height: 15,
                              marginRight: "19.67px",
                            }}
                            onClick={() =>
                              setShowEditDescriptionInputById(todo.id)
                            }
                          >
                            <PenIcon
                              style={{ width: 15, height: 15 }}
                              stroke={todo.description && "#2F80ED"}
                            />
                          </div>
                          {showEditDescriptionInputById === todo.id ? (
                            <textarea
                              style={{
                                padding: 12,
                                width: "100%",
                                borderRadius: 5,
                              }}
                              onBlur={(e) =>
                                handleUpdateTodoDescription(
                                  todo.id,
                                  e.target.value
                                )
                              }
                              defaultValue={todo.description}
                            />
                          ) : (
                            <Description
                              onClick={() =>
                                setShowEditDescriptionInputById(todo.id)
                              }
                            >
                              {todo.description
                                ? todo.description
                                : "No Description"}
                            </Description>
                          )}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            position: "relative",
                            background: "#F9F9F9",
                            // height: 49,
                            maxWidth: "100%",
                            alignItems: "center",
                            paddingLeft: 11,
                            paddingTop: 7,
                            paddingBottom: 13.42,
                            alignItems: "center",
                            borderRadius: 5,
                          }}
                          // onClick={() =>
                          //   setShowStickersBubbleById(
                          //     (showStickersBubbleById) =>
                          //       showStickersBubbleById === todo.id
                          //         ? ""
                          //         : todo.id
                          //   )
                          // }
                        >
                          <div
                            style={{
                              width: 14.17,
                              height: 18.33,
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              setShowStickersBubbleById(
                                (showStickersBubbleById) =>
                                  showStickersBubbleById === todo.id
                                    ? ""
                                    : todo.id
                              )
                            }
                          >
                            <BookMarkIcon
                              style={{ width: 14.17, height: 18.33 }}
                              stroke={todo.stickers.length && "#2F80ED"}
                            />
                          </div>
                          <div
                            style={{
                              display: "flex",
                              width: "100%",
                              minHeight: 49,
                              marginLeft: "28px",
                              flexWrap: "wrap",
                              alignItems: "center",
                              gap: 9.96,
                            }}
                          >
                            {todo.stickers.map((sticker) => (
                              <div
                                key={sticker.id}
                                style={{
                                  background: sticker.color,
                                  color: "black",
                                  paddingTop: 8,
                                  paddingBottom: 8,
                                  paddingRight: 12,
                                  paddingLeft: 12,
                                  borderRadius: 5,
                                }}
                              >
                                {sticker.name}
                              </div>
                            ))}
                          </div>
                          {showStickersBubbleById === todo.id && (
                            <div
                              style={{
                                width: 277,
                                borderRadius: 5,
                                background: "#FFFFFF",
                                position: "absolute",
                                zIndex: 999,
                                top: 20,
                                left: 0,
                                cursor: "pointer",
                                padding: 10,
                              }}
                            >
                              {stickers.map((sticker) => (
                                <div
                                  style={{
                                    background: sticker.color,
                                    height: 28,
                                    marginBottom: 11,
                                    display: "flex",
                                    alignItems: "center",
                                    padding: 14.07,
                                  }}
                                  onClick={() =>
                                    handleAddSticker(todo.id, sticker.id)
                                  }
                                  key={sticker.id}
                                >
                                  <strong>{sticker.name}</strong>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </Body>
                    </div>
                  </TaskItemContainer>
                </TaskItem>
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
function getCurrentElementStyleDisplay(element) {
  return element.currentStyle
    ? element.currentStyle["display"]
    : window.getComputedStyle
    ? window.getComputedStyle(element, null).getPropertyValue("display")
    : null;
}

export default Task;
