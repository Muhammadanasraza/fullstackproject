// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Header from './components/Header';
import Home from './pages/Home/Home';
import Login from './auth/login/login';
import Register from './auth/register/register';
import Dashboard from './components/Dashboard';
import Profile from './pages/Profile/Profile';
import Courses from './pages/Courses/Courses';
import Students from './components/Students';
import Trainers from './pages/Trainer/Trainers';
import StudentsInfo from './pages/Student/StudentsInfo';
import CourseRequests from './pages/Requests/CourseRequests';
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='/trainers' element={<Trainers />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/student' element={<StudentsInfo />} />
          <Route path='/requests' element={<CourseRequests />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
