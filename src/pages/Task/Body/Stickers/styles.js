import styled from "styled-components";

export const StickersContainer = styled.div`
  display: flex;
  position: relative;
  background: #f9f9f9;
  width: 100%;
  align-items: center;
  padding-left: 11px;
  padding-top: 7px;
  padding-bottom: 13.42px;
  align-items: center;
  border-radius: 5px;
`;

export const BookMarkIconContainer = styled.div`
  width: 14.17px;
  height: 18.33px;
  cursor: pointer;
`;

export const CurrentStickersContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 49px;
  margin-left: 28px;
  flex-wrap: wrap;
  align-items: center;
  gap: 9.96px;
`;

export const CurrentSticker = styled.div`
  padding: 8px 12px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
`;

export const CurrentStickerName = styled.div`
  font-size: 12px;
`;

export const AddStickerContainer = styled.div`
  width: 277px;
  border-radius: 5px;
  background: #ffffff;
  position: absolute;
  z-index: 999;
  top: 50px;
  left: 0;
  cursor: pointer;
  padding: 10px;
`;

export const Sticker = styled.div`
  background-color: ${(props) => props.color};
  height: 28px;
  margin-bottom: 11px;
  display: flex;
  align-items: center;
  padding: 14.07px;
  border-radius: 5px;
`;

export const StickerName = styled.p`
  font-size: 12px;
`;
