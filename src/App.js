import React from "react";
import { Routes, Route } from "react-router-dom";

import "./index.css";

import Login from "./routes/Login";
import Announcements from "./routes/Announcements";
import Projects from "./routes/Projects";
import SelectCompany from "./routes/SelectCompany"
import Teams from "./routes/Teams"
import Users from "./routes/UsersRegistry"

import FetchTestApi from "./services/FetchTestApi.js";

function App() {
  return (
    <>
      <Routes>
        <Route path= "/" element= {<Login />}/>;
        <Route path= "/home" element= {<Announcements />} />
        <Route path= "/projects" element= {<Projects />} />
        <Route path= "/select-company" element= {<SelectCompany />} />
        <Route path= "/teams" element= {<Teams />} />
        <Route path= "/users" element= {<Users />} />
        <Route path= "/api" element= {<FetchTestApi />} />
      </Routes>
    </>
  );
}

export default App;
