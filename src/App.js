import About from "./components/about/About";
import Code from "./components/code/Code";
import Youtube from "./components/youtube/Youtube";
import Footer from "./components/footer/Footer";
import "./index.css";
import Projects from "./components/projects/Projects";
import GoToTop from "./components/gototop/GoToTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Courses from "./components/courses/Courses";
import Freelance from "./components/freelance/Freelance";
import Products from "./components/products/Products"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="h-screen">
                  <Home />
                  <About />
                  <Code />
                  <Youtube />
                  <Projects />
                  <Footer />
                </div>
                <GoToTop />
              </>
            }
          />
          <Route path="/courses" element={<Courses />} />
          <Route path="/freelance" element={<Freelance />} />
          <Route path="/my-products" element={<Products />} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
