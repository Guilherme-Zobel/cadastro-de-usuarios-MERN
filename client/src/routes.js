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


export default function Routes(){

  return(
    <BrowserRouter>
      <Switch>
        {/* Rota Cliente */}
        <Route path="/" exact component={Home} />
        <Route path="/produtos/:idProduto" exact component={ProdutoDetails} />

        {/* Rota Admin */}
        <Route path="/admin" exact component={DashBoard} />
        <Route path="/admin/produtos" exact component={Produtos} />
        <Route path="/admin/produtos/cadastrar" exact component={ProdutoCadatrar} />
        <Route path="/admin/produtos/editar/:idProduto" exact component={ProdutoEditar} />

        <Route path="/admin/usuarios" exact component={Usuarios} />
        <Route path="/admin/usuarios/cadastrar" exact component={UsuarioCadastrar} />
        <Route path="/admin/usuarios/editar/:idProduto" exact component={UsuarioEditar} />
      </Switch>
    </BrowserRouter>
  )
}