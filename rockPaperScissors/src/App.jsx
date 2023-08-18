import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import HomePage from "../components/HomePage"
import Start from "../components/Start"


function App() {

  return (
       <div>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<HomePage />}></Route>
                  <Route path='/test' element={<Start/>}></Route>
              </Routes>
          </BrowserRouter>
       </div>
  )
}

export default App
