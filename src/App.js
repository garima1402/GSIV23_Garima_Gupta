import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./screens/header";
import Card from "./screens/card";
import Details from "./screens/details";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );   
}

export default App;
