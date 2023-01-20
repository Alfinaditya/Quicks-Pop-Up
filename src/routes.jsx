import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inbox from "./pages/Inbox";
import FloatingActionButtons from "./partials/FloatingActionButtons";

const AllRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={""} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="todo" element={<Todo />} />
        </Routes>
        <FloatingActionButtons />
      </BrowserRouter>
    </>
  );
};

const Todo = () => {
  return (
    <>
      <h1>Todo Page</h1>
    </>
  );
};

export default AllRoutes;
