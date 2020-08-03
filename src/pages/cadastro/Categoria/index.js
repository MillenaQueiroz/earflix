import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
function CadastroCategoria(){
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
  };
   const [values, setValues] = useState(valoresIniciais);
   
   function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }
   
  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

   return(
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>
        
        <form onSubmit={function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);
          
        }}>
          
          <FormField 
          label = "Nome da Categoria: "
          value = {values.nome}
          onChange = {handleChange}
          />

          <FormField
          label = "Descricao:"
          label="Descrição:"
          type="text"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
          {/*<div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
          </div>
          <button type="submit">
          Cadastrar
        </button>*/}
        </form>
            
        <ul>
            {categorias.map((categoria,indice) => {
              return(
                <li key ={`${categoria}${indice}`}>
                  {categoria.nome}
                </li>
              )
            })}
        </ul>

        <Link to = "/">
          Ir para a Tela Inicial
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;