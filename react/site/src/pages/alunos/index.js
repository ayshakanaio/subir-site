
import Cabecalho from '../../components/cabecalho'
import Menu from '../../components/menu'

import { Container, Conteudo } from './styled'

import { useState, useEffect } from 'react';

import Api from '../../service/api';
const api =new Api();


export default function Index() {

        const [alunos, setAlunos] = useState([]);
        const [nome, setNome] = useState('');
        const [chamada, setChamada] = useState('');
        const [turma, setTurma] = useState('');
        const [curso, setCurso] = useState('');
        const [idAlterado, setIdAlterado] = useState(0);


        async function listar() {
            let r = await api.listar();
            setAlunos(r);
        }

        async function inserir() {

            if (idAlterado == 0) {
                let r = await api.alterar(nome, chamada, curso, turma);

                if (r.erro)
                    alert(r.erro);
                else
                    alert('Aluno Alterado!');
            } else {
                let r = await api.alterar(idAlterado, nome, chamada, curso, turma);

                if (r.erro)
                    alert(r.erro);
                else
                    alert('Aluno Alterado!');
            }
            
            limparCampos();
            listar();
        }

        function limparCampos() {
            setNome('');
            setChamada('');
            setCurso('');
            setTurma('');
            setIdAlterado(0);
        }

        async function remover(id) {
            let r = await api.remover(id);
            alert('Aluno removido!');

            listar();
        }
    
        async function editar(item) {
            setNome(item.nm_aluno);
            setChamada(item.nr_chamada);
            setCurso(item.nm_curso);
            setTurma(item.nm_turma);
            setIdAlterado(item.id_matricula);
        }    

        useEffect(() =>)

    return (
        <Container>
            <Menu />
            <Conteudo>
                <Cabecalho />
                <div class="body-right-box">
                    <div class="new-student-box">
                        
                        <div class="text-new-student">
                            <div class="bar-new-student"></div>
                            <div class="text-new-student">Novo Aluno</div>
                        </div>

                        <div class="input-new-student"> 
                            <div class="input-left">
                                <div class="agp-input"> 
                                    <div class="name-student"> Nome: </div>  
                                    <div class="input"> <input /> </div>  
                                </div> 
                                <div class="agp-input">
                                    <div class="number-student"> Chamada: </div>  
                                    <div class="input"> <input /> </div> 
                                </div>
                            </div>

                            <div class="input-right">
                                <div class="agp-input">
                                    <div class="corse-student"> Curso: </div>  
                                    <div class="input"> <input /> </div>  
                                </div>
                                <div class="agp-input">
                                    <div class="class-student"> Turma: </div>  
                                    <div class="input"> <input /> </div> 
                                </div>
                            </div>
                            <div class="button-create"> <button> Cadastrar </button> </div>
                        </div>
                    </div>

                    <div class="student-registered-box">
                        <div class="row-bar"> 
                            <div class="bar-new-student"> </div>
                            <div class="text-registered-student"> Alunos Matriculados </div>
                        </div>
                    
                        <table class ="table-user">
                            <thead>
                                <tr>
                                    <th> ID </th>
                                    <th> Nome </th>
                                    <th> Chamada </th>
                                    <th> Turma </th>
                                    <th> Curso </th>
                                    <th class="coluna-acao"> </th>
                                    <th class="coluna-acao"> </th>
                                </tr>
                            </thead>
                    
                            <tbody>
                                <tr>
                                    <td> 1 </td>
                                    <td> Fulao da Silva Sauro</td>
                                    <td> 15 </td>
                                    <td> InfoX </td>
                                    <td> Informática </td>
                                    <td> <button> <img src="/assets/images/edit.svg" alt="" /> </button> </td>
                                    <td> <button> <img src="/assets/images/trash.svg" alt="" /> </button> </td>
                                </tr>
                            
                                <tr class="linha-alternada">
                                    <td> 1 </td>
                                    <td> Fulao da Silva Sauro</td>
                                    <td> 16 </td>
                                    <td> InfoX </td>
                                    <td> Informática </td>
                                    <td> </td>
                                    <td> </td>
                                </tr>

                                <tr>
                                    <td> 1 </td>
                                    <td> Fulao da Silva Sauro</td>
                                    <td> 17 </td>
                                    <td> InfoX </td>
                                    <td> Informática </td>
                                    <td> </td>
                                    <td> </td>
                                </tr>

                                <tr class="linha-alternada">
                                    <td> 1 </td>
                                    <td> Fulao da Silva Sauro</td>
                                    <td> 18 </td>
                                    <td> InfoX </td>
                                    <td> Informática </td>
                                    <td> </td>
                                    <td> </td>
                                </tr>
                                
                            </tbody> 
                        </table>
                    </div>
                </div>
            </Conteudo>
        </Container>
    )
}
