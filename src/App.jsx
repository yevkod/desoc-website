import './App.css';
import React from 'react';
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

export const App = () => {
  return (
    <div className="App overflow-hidden">
      <NavbarView />
      <MainView />
      <PhonesView />
      <PartnersView />
      <FeaturesView />
      <RevenueView />
      <SupplyView />
      <StageView />
      <CreatorsView />
      <Future />
      <FooterView />
    </div>
  );
}

