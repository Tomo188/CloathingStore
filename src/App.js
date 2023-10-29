import "./App.css";
import {Routes,Route}from "react-router-dom"
import Home from "./routes/home/home.component";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
function App() {
 
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={ <Home />} />
    </Routes>
   <Footer />
    </>
  );
}

export default App;
