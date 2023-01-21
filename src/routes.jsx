import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inbox from "./pages/Inbox";
import InboxDetail from "./pages/Inbox/Inbox[id]";
import FloatingActionButtons from "./partials/FloatingActionButtons";

const AllRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={""} />
          {/* <Route path="inbox" element={"halo"}>
            <Route path="de" element="kontol" />
          </Route> */}

          {/* INBOX */}
          <Route path="inbox" element={<Inbox />} />
          <Route path="inbox/:id" element={<InboxDetail />} />
          {/* INBOX */}
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
