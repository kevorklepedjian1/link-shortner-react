import "./App.css";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero";
import UrlShortener from "./components/Short/Short";
import Statistics from "./components/Stats/Stats";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">

      <Header />
      <Hero />
      <UrlShortener />
      <Statistics />
      <Footer />

    </div>
  );
}

export default App;
