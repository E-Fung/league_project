import React from 'react';
import { Navbar } from './components';
import Champions from './champions/Champions';
import Items from './items/Items';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="champions" element={<Champions />} />
          <Route path="items" element={<Items />} />
          <Route path="*" element={<>404 Page Not Found</>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
