import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Word, Clock, Hook, Study } from '../pages';
import './styles/index.scss'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clock" element={<Clock />} />
        <Route path="/" element={<Study />} />
        <Route path="/hook" element={<Hook />} />
        <Route path="/word/:day" element={<Word />} />
      </Routes>
    </BrowserRouter>
  )
}
