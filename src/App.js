import "./App.css";
import {Routes,Route}from "react-router-dom"
import Navigation from "./routes/home/home.component";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Shop from "./routes/shop/shop.component";
import SignIn from "./routes/sign-in/sign_in";
import DirectoryCategory from "./components/directory-item/directory-category";
function App() {
 
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={ <Navigation />}>
      <Route index element={ <DirectoryCategory />} />
      <Route path="shop" element={<Shop />} /> 
      <Route path="sign-in" element={<SignIn />} />   
      </Route>
    </Routes>
   <Footer />
    </>
  );
}

export default App;
