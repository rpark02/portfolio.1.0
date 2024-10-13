import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Projects from "@/scenes/projects";
import Project1 from "@/scenes/allProjects/project1";
import Footer from "@/scenes/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

const FooterWrapper = () => {
  const location = useLocation();

  return <>{location.pathname === "/" && <Footer />}</>;
};

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="app flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        {/* Main content */}
        {/* Add padding top based on the height of your navbar (96px in this case) */}
        <div className="flex-grow pt-[96px]">
          <Routes>
            <Route
              path="/"
              element={<Home setSelectedPage={setSelectedPage} />}
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/project1" element={<Project1 />} />
          </Routes>
        </div>
        <FooterWrapper />
      </div>
    </Router>
  );
}

export default App;
