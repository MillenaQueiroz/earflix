import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';
import { Table } from './styles';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',

  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://earflix.herokuapp.com/categorias';
      fetch(URL)
        .then(async (respostaDoServidor) => {
          if (respostaDoServidor.ok) {
            const resposta = await respostaDoServidor.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:&nbsp;
        <h4 style={{ color: 'var(--primary)', display: 'inline' }}>{values.titulo}</h4>
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        setCategorias([
          ...categorias,
          values,
        ]);
        categoriasRepository.create({
          titulo: values.titulo,
          descricao: values.descricao,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
          });

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Table>

        <tr>
          <th>Nome da Categoria</th>
          <th>Descrição</th>
        </tr>

        {categorias.map((categoria) => (
          <tr key={categoria.id}>
            <td
              className="titulo"
            >
              {categoria.titulo}
            </td>
            <td>{categoria.descricao}</td>
          </tr>
        ))}

      </Table>

          <br/>
    </PageDefault>
  );
}

export default CadastroCategoria;
