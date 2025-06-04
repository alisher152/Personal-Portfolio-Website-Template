import { ThemeProvider } from "./components/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Description from "./components/Description";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-test-light dark:bg-black text-black dark:text-white">
        <Navbar />
        <Hero />
        <Header />
        <Description />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
