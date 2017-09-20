import React, { Component } from 'react';
import Noticias from './Noticias';

class ContainerNoticias extends Component {
  render() {

    let noticias = [
      {id: 1, link:'#noticia/1', imagem:'./imagens/bitt.jpeg', titulo: "Site de torrents minera moedas virtuais no seu computador"},
      {id: 2, link:'#noticia/2', imagem:'./imagens/rosto-3d.png', titulo: "Site cria modelo 3D do seu rosto a partir de uma foto"},
      {id: 3, link:'#noticia/3', imagem:'./imagens/google.png', titulo: "Google anuncia novo centro de computação em nuvem no Brasil"},
      {id: 4, link:'#noticia/4', imagem:'./imagens/apol.jpeg', titulo: "Com novo sistema operacional, Apple faz mudanças na App Store"},
      {id: 5, link:'#noticia/4', imagem:'./imagens/apol.jpeg', titulo: "Com novo sistema operacional, Apple faz mudanças na App Store"},
      {id: 6, link:'#noticia/4', imagem:'./imagens/apol.jpeg', titulo: "Com novo sistema operacional, Apple faz mudanças na App Store"}
    ];

    return (
        <div className=" container">
            <Noticias noticias={noticias} />
        </div>
    );
  }
}

export default ContainerNoticias;