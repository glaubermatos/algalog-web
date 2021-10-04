import { Header } from "../components/Header";
import { Container, Content } from "../styles/pages/clientes";
import { FiEdit2, FiTrash2 } from 'react-icons/fi'

export function Clientes() {
    return(
        <Container>
            <Header 
                iconName="clientes" 
                title="Clientes" 
                helpText="2 clientes cadastrados"
            >
                <button>
                    Novo cliente
                </button>
            </Header>
            <Content>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Glauber de Oliveira Matos</td>
                            <td>glauber@email.com</td>
                            <td>73981787390</td>
                            <td>
                                <button 
                                    type="button"
                                >
                                    <FiEdit2 size="1.25rem" color="#5CB768" />
                                </button>

                                <button 
                                    type="button"
                                >
                                    <FiTrash2 size="1.25rem" color="#CF3034" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Glauber de Oliveira Matos</td>
                            <td>glauber@email.com</td>
                            <td>73981787390</td>
                            <td>
                                <button 
                                    type="button"
                                >
                                    <FiEdit2 size="1.25rem" color="#5CB768" />
                                </button>

                                <button 
                                    type="button"
                                >
                                    <FiTrash2 size="1.25rem" color="#CF3034" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Glauber de Oliveira Matos</td>
                            <td>glauber@email.com</td>
                            <td>73981787390</td>
                            <td>
                                <button 
                                    type="button"
                                >
                                    <FiEdit2 size="1.25rem" color="#5CB768" />
                                </button>

                                <button 
                                    type="button"
                                >
                                    <FiTrash2 size="1.25rem" color="#CF3034" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Content>
        </Container>
    );
}