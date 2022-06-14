import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Team from "./pages/team";
import Contact from "./pages/contact";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About/>
        <Services/>
        <Team/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
};

export default App;
