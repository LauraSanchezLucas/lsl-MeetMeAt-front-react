import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './layout/home/home';


export const MainApp = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={ <Home/> }/>
    </Routes>
    </div>
  )
}
