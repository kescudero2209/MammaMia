import NavBar from './layouts/NavBar';
import Home from './views/Home';
import ProductDetail from './views/ProductDetail';
import Checkout from './views/Checkout';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AppPizzaContextProvider } from './context/AppPizzaContext';
import { CheckoutContextProvider } from './context/CheckoutContext';


function App() {

  return (
    <>
    <AppPizzaContextProvider>
    <CheckoutContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={ <ProductDetail />}/>
          <Route path="/checkout" element={ <Checkout />}/>
        </Routes>
      </BrowserRouter>
      </CheckoutContextProvider>
  </AppPizzaContextProvider>
    </>
  );
}

export default App;
