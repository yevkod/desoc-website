import './App.css';
import React, { useState } from 'react';
import { NavbarView } from './pages/navbar/NavbarView';
import { MainView } from './pages/main/MainView';
import { PhonesView } from './pages/phones/PhonesView';
import { PartnersView } from './pages/partners/PartnersView';
import { FeaturesView } from './pages/features/FeaturesView';
import { RevenueView } from './pages/revenue/RevenueView';
import { SupplyView } from './pages/supply/SupplyView';
import { StageView } from './pages/stage/StageView';
import { CreatorsView } from './pages/creators/CreatorsView';
import { Future } from './pages/Future/Future';
import { FooterView } from './pages/Footer/FooterView';
import { BurgerMenuView } from './components/burgerMenu/BurgerMenuView';

export const App = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="App overflow-hidden">
      {menu && (
        <div className='flex lg:hidden fixed rounded-lg z-[50] top-[60px] right-0 flex-col shadow-md bg-white'>
          <BurgerMenuView setMenu={setMenu} />
        </div>
      )}
      <NavbarView menu={menu} setMenu={setMenu} />
      <div id='mainView'><MainView /></div>
      <div id='phonesView'><PhonesView /></div>
      <div id='partnersView'><PartnersView /></div>
      <div id='featuresView'><FeaturesView /></div>
      <div id='revenueView'><RevenueView /></div>
      <div id='supplyView'><SupplyView /></div>
      <div id='stageView'><StageView /></div>
      <div id='creatorsView'><CreatorsView /></div>
      <div id='future'><Future /></div>
      <FooterView />
    </div>
  );
}

