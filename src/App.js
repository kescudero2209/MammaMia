import NavBar from './layouts/NavBar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import ProductDetail from './views/ProductDetail';

import { AppPizzaContextProvider } from './context/AppPizzaContext';
import { CheckoutContextProvider } from './context/CheckoutContext';

function App() {
  return (
    <AppPizzaContextProvider>
    <CheckoutContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={ <ProductDetail />}/>
        </Routes>
      </BrowserRouter>
      </CheckoutContextProvider>
  </AppPizzaContextProvider>
  );
}

export default App;
