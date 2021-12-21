import React from 'react';
import Main from './main';
import MainHome from './MainHome';
import SecondPadge from './SecondPadge';
import { Route, Routes, Link } from 'react-router-dom';
const app = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/second" element={<SecondPadge />}></Route>
        <Route exact path="/" element={<MainHome />}></Route>
      </Routes>
    </div>
  );
};

export default app;
