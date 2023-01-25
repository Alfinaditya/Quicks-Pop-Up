import dayjs from "dayjs";
import React, { useState } from "react";
import { CalendarIcon, ClockIcon } from "../../../../icons";
import {
  CalendarIconContainer,
  ClockIconContainer,
  DateContainer,
  DatePicker,
  DatePickerInput,
  HiddenDatePickerInput,
} from "./styles";

const CalendarSection = ({ tasks, setTasks, todo }) => {
  const [calendarValue, setCalendarValue] = useState("");

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

  return (
    <DateContainer>
      <ClockIconContainer
        onClick={() => {
          document.getElementById(`date-picker-${todo.id}`).showPicker();
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
              document.getElementById(`date-picker-${todo.id}`).showPicker();
            }}
            readOnly
          />
          <CalendarIconContainer
            onClick={() => {
              document.getElementById(`date-picker-${todo.id}`).showPicker();
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
            document.getElementById(`calendar-${todo.id}`).value = dayjs(
              e.target.value
            ).format("DD/MM/YYYY");
          }}
        />
      </DatePicker>
    </DateContainer>
  );
};

export default CalendarSection;
