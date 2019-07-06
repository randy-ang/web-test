import React from 'react';
import './App.css';
import AllRoutes from './index.routes';
import LanguageContext from './context/language.context';
import { getDictionary } from './util/language';

const App = () => {
  return (
    <LanguageContext.Provider value={getDictionary()}>
      <div className="App">
        <AllRoutes/>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
