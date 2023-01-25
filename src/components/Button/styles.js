import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
  height: 40px;
  width: 76px;
  padding: 8px, 16px, 8px, 16px;
  background: #2f80ed;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
`;
