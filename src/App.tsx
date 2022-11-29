import React from 'react';
import './App.scss';
import { FairyTail } from './HomePage/fairytail/fairytail';
import { Header } from './assets/header/header';
import { Bus } from './HomePage/bus/bus';
import { Hotel } from './HomePage/hotel/hotel';
import { Price } from './HomePage/price/price';
import { Cтоимость } from './HomePage/cтоимость/cтоимость';
import { Footer } from './HomePage/Footer/footer';

export const App = () => {
  return (
    <div className="App">
      <Header/>
      <FairyTail/> 
      <Bus/>
      <Hotel/>
      <Price/>
      <Cтоимость/>
      <Footer/>
    </div>
  );
}
export default App;