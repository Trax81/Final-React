import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import Modal from './components/Modal.jsx'
import React, { useState } from 'react'






function App() {
  const [showModal, setShowModal] = useState(false)
  return (
   <div>
  <Title />
  <div>
    <input type="text" onChange= {(event) => {

console.log(event.target.value)
    }} />
    <button onClick={() => setShowModal(true)}>Add todo</button>
  </div>
  <div className="todo__wrapper">
    <Todo title="Finish Frontend Simplified" />
      <Todo title="Finish Interview Section" />
        <Todo title="Land a $100k job" />

   </div>

  {showModal && <Modal title="Confirm delete?" /> }
 </div>
  )
}

export default App
