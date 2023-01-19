import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import { Mode } from './Params.js';
import { GameModeHome } from './GameModeHome.jsx';
import { StrollModeTop } from './StrollModeTop.jsx';
import { RoutingTest01 } from './RoutingTest01.jsx';
import { RoutingTest02 } from './RoutingTest02.jsx';
import { NotFound } from './NotFound.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
  // const [showGameModeHome, setShowGameModeHome] = useState(false);
  // const [currentStates, setCurrentStates] = useState(Mode.GameHomeMode);

  // if (currentStates === Mode.GameHomeMode) {
  //   return (<GameModeHome showGameModeHome={showGameModeHome} setShowGameModeHome={setShowGameModeHome} currentStates={currentStates} setCurrentStates={setCurrentStates} />);
  // } else if (currentStates === Mode.StrollMode) {
  //   return (<StrollModeTop currentStates={currentStates} setCurrentStates={setCurrentStates}/>);
  // }
  return (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GameModeHome />} />
          <Route path="/about" element={<RoutingTest02 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>

    // <>
    //   <RoutingTest01 />
    // </>
  );
};
