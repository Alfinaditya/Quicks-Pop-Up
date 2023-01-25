import React, { Fragment, useState } from "react";
import {
  ArrowDownWardIcon,
  ArrowUpWardIcon,
  BookMarkIcon,
  CalendarIcon,
  ClockIcon,
  OptionsIcon,
  PenIcon,
} from "../../../icons";
import {
  AddStickerContainer,
  BookMarkIconContainer,
  CalendarIconContainer,
  ClockIconContainer,
  CollapseBody,
  CollapseIconContainer,
  CreatedAt,
  CurrentSticker,
  CurrentStickerName,
  CurrentStickersContainer,
  DateContainer,
  DatePicker,
  DatePickerInput,
  DaysLeft,
  Description,
  DescriptionContainer,
  DescriptionTextArea,
  HiddenDatePickerInput,
  OptionsBubble,
  OptionsBubbleText,
  PenIconContainer,
  Sticker,
  StickerName,
  StickersContainer,
  TaskCheckbox,
  TaskItem,
  TaskItemContainer,
  TaskItemHead,
  TaskOptionContainer,
  TaskToolsContainer,
  Title,
  TitleInput,
} from "./styles";
import Loading from "../../../components/Loading";
import dayjs from "dayjs";

const TaskBody = ({
  tasks,
  setTasks,
  filteringTasks,
  stickers,
  setStickers,
}) => {
  const [showOptionsBubbleById, setShowOptionsBubbleById] = useState("");
  const [showStickersBubbleById, setShowStickersBubbleById] = useState("");
  const [calendarValue, setCalendarValue] = useState("");
  const [showEditDescriptionInputById, setShowEditDescriptionInputById] =
    useState("");

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
    <>
      {tasks.length && !filteringTasks ? (
        tasks.map((task) => (
          <Fragment key={task.id}>
            {task.todos.map((todo) => {
              return (
                <TaskItem key={todo.id}>
                  <TaskItemContainer>
                    <TaskCheckbox
                      onClick={() => handleFinishTodo(todo.id)}
                      type="checkbox"
                      defaultChecked={todo.isFinished}
                    />
                    <div
                      style={{
                        padding: 2,
                        position: "relative",
                        width: "100%",
                      }}
                    >
                      {/* Head */}
                      <TaskItemHead>
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

                        <DaysLeft>
                          {!todo.isFinished &&
                            todo.daysLeft > 0 &&
                            `${todo.daysLeft} Days Left`}
                        </DaysLeft>
                        <CreatedAt>
                          {todo.createdAt &&
                            dayjs(todo.createdAt).format("DD/MM/YYYY")}
                        </CreatedAt>
                        <TaskToolsContainer>
                          &nbsp;
                          <div onClick={() => handleCollapse(todo.id)}>
                            <CollapseIconContainer
                              id={`arrow-upward-icon-${todo.id}`}
                              isHidden={todo.isFinished}
                            >
                              <ArrowUpWardIcon />
                            </CollapseIconContainer>
                            <CollapseIconContainer
                              id={`arrow-downward-icon-${todo.id}`}
                              isHidden={!todo.isFinished}
                            >
                              <ArrowDownWardIcon />
                            </CollapseIconContainer>
                          </div>
                          <TaskOptionContainer
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
                          </TaskOptionContainer>
                        </TaskToolsContainer>
                        {showOptionsBubbleById === todo.id && (
                          <OptionsBubble>
                            <OptionsBubbleText
                              onClick={() => handleDeleteTodo(todo.id)}
                            >
                              Delete
                            </OptionsBubbleText>
                          </OptionsBubble>
                        )}
                      </TaskItemHead>
                      <CollapseBody
                        id={`body-${todo.id}`}
                        isFinished={todo.isFinished}
                      >
                        <DateContainer>
                          <ClockIconContainer
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
                          </ClockIconContainer>

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
                              <CalendarIconContainer
                                onClick={() => {
                                  document
                                    .getElementById(`date-picker-${todo.id}`)
                                    .showPicker();
                                }}
                              >
                                <CalendarIcon />
                              </CalendarIconContainer>
                            </div>

                            <HiddenDatePickerInput
                              type="date"
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
                        </DateContainer>

                        <DescriptionContainer>
                          <PenIconContainer
                            onClick={() =>
                              setShowEditDescriptionInputById(todo.id)
                            }
                          >
                            <PenIcon
                              style={{ width: 15, height: 15 }}
                              stroke={todo.description && "#2F80ED"}
                            />
                          </PenIconContainer>
                          {showEditDescriptionInputById === todo.id ? (
                            <DescriptionTextArea
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
                        </DescriptionContainer>
                        <StickersContainer>
                          <BookMarkIconContainer
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
                          </BookMarkIconContainer>
                          <CurrentStickersContainer>
                            {todo.stickers.map((sticker) => (
                              <CurrentSticker
                                color={sticker.color}
                                key={sticker.id}
                              >
                                <CurrentStickerName>
                                  {sticker.name}
                                </CurrentStickerName>
                              </CurrentSticker>
                            ))}
                          </CurrentStickersContainer>
                          {showStickersBubbleById === todo.id && (
                            <AddStickerContainer>
                              {stickers.map((sticker) => (
                                <Sticker
                                  color={sticker.color}
                                  onClick={() =>
                                    handleAddSticker(todo.id, sticker.id)
                                  }
                                  key={sticker.id}
                                >
                                  <StickerName>{sticker.name}</StickerName>
                                </Sticker>
                              ))}
                            </AddStickerContainer>
                          )}
                        </StickersContainer>
                      </CollapseBody>
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
    </>
  );
};

function getCurrentElementStyleDisplay(element) {
  return element.currentStyle
    ? element.currentStyle["display"]
    : window.getComputedStyle
    ? window.getComputedStyle(element, null).getPropertyValue("display")
    : null;
}
export default TaskBody;
