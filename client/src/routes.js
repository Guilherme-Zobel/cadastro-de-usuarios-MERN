import React from 'react';

import { BrowserRouter, Route, Switch  } from 'react-router-dom';


// IMPORTS ADMIN
import DashBoard from './pages/admin/dashboard';

import Produtos from './pages/admin/produtos';
import ProdutoEditar from './pages/admin/produtos/produtos.editar';
import ProdutoCadatrar from './pages/admin/produtos/produtos.cadastrar';

import Usuarios from './pages/admin/usuarios';
import UsuarioEditar from './pages/admin/usuarios/usuarios.editar';
import UsuarioCadastrar from './pages/admin/usuarios/usuarios.cadastrar';

// IMPORTS CLIENT
import Home from './pages/client/home';
import ProdutoDetails from './pages/client/produtos/produtos.details';
import Login from './pages/admin/login/index'

import PriveteRoute from './services/wAuth'



export default function Routes(){

  return(
    <BrowserRouter>
      <Switch>
        {/* Rota Cliente */}
        <Route path="/" exact component={Home} />
        <Route path="/produtos/:idProduto" exact component={ProdutoDetails} />

        {/* Rota Admin */}
        <Route path="/admin/login" exact component={Login} />
        <PriveteRoute path="/admin" exact component={DashBoard} />

        <PriveteRoute path="/admin/produtos" exact component={Produtos} />
        <PriveteRoute path="/admin/produtos/cadastrar" exact component={ProdutoCadatrar} />
        <PriveteRoute path="/admin/produtos/editar/:idProduto" exact component={ProdutoEditar} />

        <PriveteRoute path="/admin/usuarios" exact component={Usuarios} />
        <PriveteRoute path="/admin/usuarios/cadastrar" exact component={UsuarioCadastrar} />
        <PriveteRoute path="/admin/usuarios/editar/:idUsuario" exact component={UsuarioEditar} />
      </Switch>
    </BrowserRouter>
  )
}