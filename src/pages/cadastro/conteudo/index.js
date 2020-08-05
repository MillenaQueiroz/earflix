import React, { useEffect, useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link , useHistory } from 'react-router-dom';
import Button from '../../../components/Button';

import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';

import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroConteudo(){
    
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);

    const categoryTitles = categorias.map(({ nome }) => nome);

    const { handleChange, values} = useForm({
        titulo: '',
        url: '',
        categorias: '',
    });
    
    useEffect(() => {
        categoriasRepository
            .getAll()
            .then((categoriasFromServer) => {
                setCategorias(categoriasFromServer);
            });
    },[]);
    console.log(categorias);
    return(
        <PageDefault>
            <h1>Cadastro de Conteúdos</h1>

            <form onSubmit={(event) => {
                event.preventDefault();
                
                alert('Conteúdo Cadastrado!');
                
                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === values.categorias;
                });

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: categoriaEscolhida.id,
                })
                .then(() => {
                    console.log('Cadastrou com sucesso!');
                    history.push('/');
                  });
              }}
            >
                <FormField
                    label="Título do Vídeo"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />

                <FormField
                    label="URL"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />
                
                <FormField
                    label="Categoria"
                    name="categorias" 
                    value={values.categorias}
                    onChange={handleChange}
                    suggestions={categoryTitles}
                />
                
                <Button type="submit">
                    CADASTRAR
                </Button>
            </form>


            <Link to="/">Voltar para home</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<Link to="/cadastro/categoria">Cadastrar Categoria</Link>
           
        </PageDefault>
    )
}

export default CadastroConteudo;