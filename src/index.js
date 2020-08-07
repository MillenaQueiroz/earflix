import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroConteudo from './pages/cadastro/conteudo';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/conteudo" component={CadastroConteudo}  />
      <Route path="/cadastro/Categoria" component={CadastroCategoria}  />
      <Route component={() => (<div><h1>PÁGINA 404</h1></div>)} />
    </Switch>
    
  </BrowserRouter>,
  document.getElementById('root')
);


