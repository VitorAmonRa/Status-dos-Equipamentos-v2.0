
import GlobalStyles from "./GlobalStyles/GlobalStyles"
import {ToastContainer} from 'react-toastify'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {PreviewPage} from "./Pages/PreviewPage";
import {LoginPage} from "./Pages/LoginPage";
import {AdminPage} from "./Pages/AdminPage";



function App() {

  return (
    <>
      <GlobalStyles/>
      <ToastContainer autoClose={1000}/>
      <Router>
        <Routes>
          <Route path="previewpage" element={ <PreviewPage/> }/>
          <Route path="login" element={ <LoginPage/> }/>
          <Route path="/" element={<AdminPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App