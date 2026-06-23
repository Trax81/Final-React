
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from "./pages/About.jsx";







function App() {



  return (
 <div>
<Router>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
</Router>
 </div>
  )
}

export default App
