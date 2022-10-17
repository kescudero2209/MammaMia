import NavBar from './layouts/NavBar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';

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
        </Routes>
      </BrowserRouter>
      </CheckoutContextProvider>
  </AppPizzaContextProvider>
  );
}

export default App;
