import React, { Component } from 'react';
import './menu-itens.css';

class MenuItem extends Component {
  render() {
        
    let menu = this.props.menuList.map(function(itemLista){
        return(
            <li key={itemLista.title} className="list-group-item ">
                <a className="nav-link" href={itemLista.link}>{itemLista.title} <span className="sr-only">(current)</span></a>
            </li>
        )
    });
      
    return (
        <ul className="menu list-group nav nav-pills flex-column">
            {menu}
        </ul>

    );
  }
}

export default MenuItem;