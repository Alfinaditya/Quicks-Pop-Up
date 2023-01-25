import React, { Fragment, useState } from "react";
import {
  ArrowDownWardIcon,
  ArrowUpWardIcon,
  OptionsIcon,
} from "../../../icons";
import {
  CollapseBody,
  CollapseIconContainer,
  CreatedAt,
  DaysLeft,
  OptionsBubble,
  OptionsBubbleText,
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
import StickersSection from "./Stickers";
import DescriptionSection from "./Description";
import CalendarSection from "./Calendar";

const TaskBody = ({
  tasks,
  setTasks,
  filteringTasks,
  stickers,
  setStickers,
}) => {
  const [showOptionsBubbleById, setShowOptionsBubbleById] = useState("");

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
                        <CalendarSection
                          tasks={tasks}
                          setTasks={setTasks}
                          todo={todo}
                        />
                        <DescriptionSection
                          tasks={tasks}
                          setTasks={setTasks}
                          todo={todo}
                        />
                        <StickersSection
                          tasks={tasks}
                          setTasks={setTasks}
                          todo={todo}
                          stickers={stickers}
                        />
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
