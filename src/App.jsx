import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home.jsx';
import Subject from './components/Subject';
import Article from './components/Article';

export default function App() 
{
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:sub/:id/:art" element={<Article />} />
        <Route path="/:sub" element={<Subject />} />
      </Routes>
    </BrowserRouter>
  </>
}
