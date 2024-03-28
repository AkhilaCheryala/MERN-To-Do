
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import TaskForm from './Components/TaskForm';
import Filter from './Components/Filter';
import TaskManager from './Pages/TaskManager';
import Signup from './Components/Signup';
import Login from './Components/Login';
function App() {
  

  return (
    <Router>
      <Routes>
        <Route exact path="/" element ={<Home/>}/>
        <Route exact path="/TaskForm" element={<TaskForm/>}/>
        <Route exact path="/Filter" element={<Filter/>}/>
        <Route exact path="/TaskManager" element={<TaskManager/>}/>
        <Route exact path="/Signup" element={<Signup/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        </Routes>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" rel="stylesheet" />
    </Router>
  )
}

export default App
