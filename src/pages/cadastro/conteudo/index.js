import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroConteudo(){
    return(
      <PageDefault>
        <h1>Página de Cadastro de Vídeo</h1>

        <Link to = "/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </PageDefault>
    )
  }

  export default CadastroConteudo;