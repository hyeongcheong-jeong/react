import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Word, Clock } from '../pages';
import './styles/index.scss'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Clock />} />
        <Route path="/word/:day" element={<Word />} />
      </Routes>
    </BrowserRouter>
  )
}
