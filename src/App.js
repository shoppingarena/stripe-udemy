import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './components/home-page';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import MainSection from './components/main-section/main-section';
import FeaturedCollection from './components/featured-collection/featured-collection';
import Footer from './components/footer/footer';
import './App.scss';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/*<div className='App'>*/}
          <Route path="/" element={<HomePage />} />
        {/*</div>*/}
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
