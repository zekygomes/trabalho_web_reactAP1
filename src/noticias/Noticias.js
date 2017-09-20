import React, { Component } from 'react';


class CorpoNoticia extends Component {
  render() {
    let noticia = this.props.noticias.map(function(noticia){
      return(
          <div key={noticia.id} className="thumbnail noticias-secundarias">
              <figcaption className="caption">
                <img className="img-fluid" src={noticia.imagem} alt="Card image cap"/>
                <div className="caption">
                    <h3>{noticia.titulo}</h3>
                    <a href={noticia.link} className="btn btn-primary float-right">Leia...</a>
                </div>
              </figcaption>
          </div>
      )
  });

  return (
      <div className="row">
          {noticia}
      </div>
  );
    
  }
}

export default CorpoNoticia;
