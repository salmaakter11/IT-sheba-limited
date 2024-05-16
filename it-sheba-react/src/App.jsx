import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import MessegeFounder from "./About/MessegeFounder"
import Header from "./pages/Header";
import Contact from "./ContactUS/Contact";
import Footer from "./pages/Footer";

function App() {

  return (
    <>
      <div className='app'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Messegefounder" element={<MessegeFounder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>

    </>
  )
}

export default App
