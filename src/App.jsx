import { useEffect, useState } from "react";
import { NavBar, ItemListContainer, ItemDetail, Cart } from "./components";
import { getSlider } from "./mocks";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  const [sliders, setSliders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSlider()
      .then((response) => {
            setIsLoading(!isLoading);
            setSliders(response);        
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
     <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greetings={sliders} isLoading={isLoading} />} />
        <Route path="/products" element={<ItemListContainer isLoading={isLoading} />} />
        <Route path="/products/:categoryId" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ItemDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
