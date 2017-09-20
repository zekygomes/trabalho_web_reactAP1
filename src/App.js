import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import MenuLateral from './menuLateral/MenuLateral';
import NoticiaPincipal from './noticiaPrincipal/NoticiaPrincipal';
import ContainerNoticias from './noticias/ContainerNoticias';
import logo from './logo.svg';
import './App.css';

let usuario = 'Zeky';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar title='Principal' usuario={usuario}/>
        </div>
        <div className="container-fluid conteudo">
          <div className="row">
            <MenuLateral />
            <main className="col-sm-9 ml-sm-auto col-md-10 pt-3 " role="main">
              <div>
                <NoticiaPincipal />
              </div>
              <div>
                <ContainerNoticias />
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
