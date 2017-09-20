import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    
    let menuLista = [
        {title:"Home", link:"#Home"},
        {title:"Contato", link:"#Contact"},
        {title:"Ajuda", link:"#Help"},
        {title:"Teste", link:"#Test"}
    ];

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a className="navbar-brand brand-centered" href="#">{this.props.title}</a>

          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#minhaNavBar" aria-controls="minhaNavBar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="minhaNavBar">
            <form onSubmit={this.handleSubmit} className="form-inline mt-2 mt-md-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Search"></input>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
            </form>
          </div>

          <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle w-50 p-1" href="#" id="navbarDropdownMenuLink7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                { this.props.usuario }
                </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink7">
                <a className="dropdown-item" href="#"> Cadastro</a>
                <a className="dropdown-item" href="#"> Sair</a>
              </div>
            </li>

          </ul>
          
        </nav>

    );
  }
}

export default Navbar;
