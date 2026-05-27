import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import Modal from './components/Modal.jsx'






function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
  <Title />
  <div className="todo__wrapper">
    <Todo />
      <Todo />
        <Todo />

   </div>
   <Modal />
 </div>
  )
}

export default App
