import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsContextProvider from './context/products-context';
import HomePage from './components/home-page';
import NotFound from './components/not-found';
import './App.scss';

function App() {
  return (
    <>
    <BrowserRouter>
    <ProductsContextProvider>
      <Routes>
        {/*<div className='App'>*/}
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        {/*</div>*/}
      </Routes>
      </ProductsContextProvider>
    </BrowserRouter>
    
    </>
  );
}

export default App;
