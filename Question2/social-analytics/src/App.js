import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import TopUsersPage from "./pages/Topuserpage";
import TrendingPostsPage from "./pages/TredingPostsPage";
import FeedPage from "./pages/FeedPage";
import "./index.css";
import HomePage from "./pages/home";

const App = () => (
  <Router>
    <div className="min-h-screen bg-gray-100 font-sans">
      <nav className="bg-blue-600 p-4 text-white flex gap-4">
        <NavLink to="/users">Top Users</NavLink>
        <NavLink to="/trending-posts">Trending Posts</NavLink>
        <NavLink to="/feed">Feed</NavLink>
      </nav>
      <Routes>
      <Route path="/" element={<HomePage />} /> 
        <Route path="/users" element={<TopUsersPage />} />
        <Route path="/trending-posts" element={<TrendingPostsPage />} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;