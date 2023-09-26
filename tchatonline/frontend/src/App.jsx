import { Routes, Route } from "react-router-dom"
import LoginPage from './components/loginPage'
import DejaMembre from "./components/dejaMembre"
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/dejaMembre' element={<DejaMembre />} />
      </Routes>
    </div>
  )
}

export default App
