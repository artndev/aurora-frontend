import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './contexts/Home';
import Subject from './contexts/Subject';
import Article from './contexts/Article';

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
