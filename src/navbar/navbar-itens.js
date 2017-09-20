import React, { Component } from 'react';

class NavbarItem extends Component {
  render() {
        
    let menu = this.props.menuList.map(function(itemLista){
        return(
            <li key={itemLista.title} className="nav-item active">
                <a className="nav-link" href={itemLista.link}>{itemLista.title}<span className="sr-only">(current)</span></a>
            </li>
        )
    });
      
    return (
        <ul className="navbar-nav mr-auto">
            {menu}
        </ul>

    );
  }
}

export default NavbarItem;