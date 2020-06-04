import React from 'react';
import Header from './common/header';
import GlobalStyle from  './style.js';
import store from './store';
import { Provider } from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail';
import { BrowserRouter, Route } from 'react-router-dom';
import MannullyCreatePortfolio from './pages/MannullyCreatePortfolio';


function App() {
  return (
    <div className='dell'>
      <GlobalStyle />
      <Provider store={ store }>
        <Header />
        <BrowserRouter>
          <Route path='/' exact component={Home} ></Route>
          <Route path='/mannully-create-portfolio' exact component={MannullyCreatePortfolio} ></Route>
          <Route path='/detail' exact component={Detail} ></Route>

        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
