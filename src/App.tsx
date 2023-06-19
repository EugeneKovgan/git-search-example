import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePages';
import { FavoritesPage } from './pages/FavoritesPage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
