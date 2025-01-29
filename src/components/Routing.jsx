// Routing.jsx 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';  
import Footer from './Footer'; 
import Account from "../pages/Account"
import Category from "../pages/Category"
import Friends from "../pages/Friends"
import Main from "../pages/Main"
import Message from "../pages/Message"
import Profile from "../pages/Profile"
import Search from "../pages/Search"
import Write from "../pages/Write"

export default function Routing() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />  
        <Route path="/search" element={<Search />} /> 
        <Route path="/accounts" element={<Account />} /> 
        <Route path="/category" element={<Category />} /> 
        <Route path="/friends" element={<Friends />} /> 
        <Route path="/write" element={<Write />} /> 
        <Route path="/message" element={<Message />} /> 
        <Route path="/profile" element={<Profile />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}
