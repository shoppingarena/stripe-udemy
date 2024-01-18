import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import ProductsContextProvider from './context/products-context';
import HomePage from './components/home-page';
import NotFound from './components/not-found';
import Shop from './components/pages/shop/shop';
import SingleProduct from './components/single-product/single-product';
import './App.scss';

function App() {
  return (
    <>
    <BrowserRouter>
    <ProductsContextProvider>
      <Routes>
        {/*<div className='App'>*/}
          <Route path="/" element={<HomePage />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path="*" element={<NotFound />} />
        {/*</div>*/}
      </Routes>
      </ProductsContextProvider>
    </BrowserRouter>
    
    </>
  );
}

export default App;
