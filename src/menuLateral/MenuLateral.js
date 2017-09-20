import React, { Component } from 'react';
import MenuItem from './menu-itens';

class MenuLateral extends Component {
  render() {
    let menuLista = [
      {title:"Principal", link:"#principal"},
      {title:"Música", link:"#musica"},
      {title:"Tecnologia", link:"#tecnologia"},
      {title:"Ciência", link:"#ciencia"},
      {title:"Cinema", link:"#cinema"},
      {title:"Arte", link:"#arte"},
      {title:"Livros", link:"#livros"},
      {title:"Culinária", link:"#culinaria"},
      {title:"Entretenimento", link:"#entretenimento"},
      {title:"Jogos", link:"#jogos"},
    ];

    return (
      <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
        <MenuItem menuList={menuLista}/>
      </nav>
    );
  }
}

export default MenuLateral;
