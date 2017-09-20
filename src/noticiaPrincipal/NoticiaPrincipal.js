import React, { Component } from 'react';

class NoticiaPrincipal extends Component {
  render() {
    return (
            <div className="container thumbnail">
                <h2 className='text-center'>Twitter está eliminando usuários que defendem terrorismo</h2>
                <hr></hr>
                <figcaption className="caption text-center"> 
                  <img className="img-thumbnail img-responsive" src="./imagens/twitter.jpg" alt="Card image cap" style={{height: '500px'}} ></img>
                  <p>Os governos europeus e dos EUA têm pressionado empresas de redes sociais a combater a radicalização online</p>
                  <p><a className="btn btn-primary btn-lgjustify-content-center" href="#" role="button">Leia mais...</a></p>
                  
                </figcaption>
            </div>
    );
  }
}


export default NoticiaPrincipal;