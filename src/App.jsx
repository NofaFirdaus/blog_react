import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import LandingPage from './pages/LandingPage'
import Kursus from './pages/kursus'
import KursusDetail from './pages/courses/kursusDetail'
import Blog from './pages/blog'
import BlogDetail from './pages/blog/blogDetail'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/kursus' element={<Kursus />} />
        <Route path='/kursus/:id' element={<KursusDetail />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<LandingPage />} />

      </Routes>
    </Router>
  )
}

export default App
