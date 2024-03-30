
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/TaskForm" element={<TaskForm />} />
        <Route exact path="/Filter" element={<Filter />} />
        <Route exact path="/TaskManager" element={<TaskManager />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Login" element={<Login />} />
      </Routes>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" rel="stylesheet" />
      
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+Knujsl5+n9I3+dz/T7Cb6vKG1NQI8+xr2jN5uQFEmG5xZ6" crossorigin="anonymous"/>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-2vY1pIT8a/UJrD/9tBRRVJjzFLpf4i8EgS6lBrVR3gjz7IkAa1JwJ28l2F+6T1d6" crossorigin="anonymous"></script>

    </Router>
  )
}

export default App
