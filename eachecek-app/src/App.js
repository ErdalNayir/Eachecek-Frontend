import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import CustomHeader from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";

function App() {
  return (
    <div className="container">
      <CustomHeader></CustomHeader>
      <Hero></Hero>
      <About></About>
      <Products></Products>
      <Contact></Contact>
    </div>
  );
}

export default App;
