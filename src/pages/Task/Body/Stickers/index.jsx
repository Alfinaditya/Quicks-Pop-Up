import React, { useState } from "react";
import { BookMarkIcon } from "../../../../icons";
import {
  AddStickerContainer,
  BookMarkIconContainer,
  CurrentSticker,
  CurrentStickerName,
  CurrentStickersContainer,
  Sticker,
  StickerName,
  StickersContainer,
} from "./styles";

const StickersSection = ({ tasks, setTasks, todo, stickers }) => {
  const [showStickersBubbleById, setShowStickersBubbleById] = useState("");

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
    <StickersContainer>
      <BookMarkIconContainer
        onClick={() =>
          setShowStickersBubbleById((showStickersBubbleById) =>
            showStickersBubbleById === todo.id ? "" : todo.id
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
          <CurrentSticker color={sticker.color} key={sticker.id}>
            <CurrentStickerName>{sticker.name}</CurrentStickerName>
          </CurrentSticker>
        ))}
      </CurrentStickersContainer>
      {showStickersBubbleById === todo.id && (
        <AddStickerContainer>
          {stickers.map((sticker) => (
            <Sticker
              color={sticker.color}
              onClick={() => handleAddSticker(todo.id, sticker.id)}
              key={sticker.id}
            >
              <StickerName>{sticker.name}</StickerName>
            </Sticker>
          ))}
        </AddStickerContainer>
      )}
    </StickersContainer>
  );
};

export default StickersSection;
