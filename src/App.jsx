import react, { useState, useEffect, useContext } from "react";
import Account from "./components/header/user/Account";
import Login from "./components/header/user/Login";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./style/App.scss";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Main from "./components/body/main/Main";
import RecentlyListend from "./components/body/main/RecentlyListend";
import Player from "./components/body/footer_player/Player";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />

        <Route path="/recentlylistend" element={<RecentlyListend />} />
      </Routes>
      {/* <Player /> */}
    </div>
  );
}

export default App;
