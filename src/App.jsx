
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import TaskForm from './Components/TaskForm';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route exact path="/" element ={<Home/>}/>
        <Route exact path="/TaskForm" element={<TaskForm/>}/>
        </Routes>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" rel="stylesheet" />
    </Router>
  )
}

export default App
