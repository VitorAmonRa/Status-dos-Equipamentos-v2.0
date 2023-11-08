import GlobalStyles from "./GlobalStyles/GlobalStyles"
import {ToastContainer} from 'react-toastify'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <>
      <GlobalStyles/>
      <ToastContainer autoClose={1500} limit={4} />
      <Router>
        <Routes>
          <Route/>
        </Routes>
      </Router>
    </>
  )
}

export default App
