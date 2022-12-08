import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";

function App() {
  return (
    <div className="app">
      <Router>
        <>
        <Header/>
        <AppBody>
          <Sidebar />
          <Routes>
            <Route exact path="/" />
          </Routes>
        </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vw;
`;
