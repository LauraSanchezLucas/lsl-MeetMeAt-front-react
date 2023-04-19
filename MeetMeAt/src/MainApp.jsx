import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './layout/home/home';
import { Register } from './layout/register/Register';


export const MainApp = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/register' element={ <Register/> }/>
    </Routes>
    </div>
  )
}
