import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
//import Footer from '../../components/Footer';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos[0].videos[0]);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
      
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={"Novo episódio do Diagrama com Renato Reno do Bicicleta Sem Freio. A gente conversou sobre o começo do Bicicleta, sobre a banda Black Drawing Chalks e sobre os trabalhos em paredes que eles andam fazendo ao redor do mundo."}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>

          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
    
  );
}

export default Home;
