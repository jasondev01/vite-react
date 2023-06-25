import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from "./layout/MainLayout"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"


function App() {

  return (
    <>
      <Router>
          <Routes>
              <Route element={<Main />}>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
              </Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
