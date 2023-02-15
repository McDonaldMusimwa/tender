
import "./App.css";
import NavBar from "./components/header/NavBar";
import Hero from "./components/hero/Hero";
import Main from "./components/body/Main"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Main/>
    </div>
  );
}

export default App;
