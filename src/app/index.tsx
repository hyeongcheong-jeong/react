import React from "react" // react 17 이하버전에서는 생략가능
import Query from "../pages/query"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './styles/index.scss'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Query />} />
      </Routes>
    </BrowserRouter>
  )
}
