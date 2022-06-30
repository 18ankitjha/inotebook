

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import Alert from "./components/Alert";
function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert message="This is alert!!"/>
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/about' element={<About />}></Route>
            </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
