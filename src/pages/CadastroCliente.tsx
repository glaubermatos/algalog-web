import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa'

import { Header } from "../components/Header";
import { Container, Content } from "../styles/pages/cadastro-cliente";

export function CadastroCliente() {
    return(
        <Container>
            <Header 
                iconName="clientes" 
                title="Novo cliente"
                helpText="Preencha o formulário abaixo para cadastrar um novo cliente"
            >
                <Link to="/customers">
                    <FaArrowLeft size={14} color="#0C1D0E"/>
                    Voltar
                </Link>
            </Header>
            <Content>
                <form action="#" autoComplete="off">
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Informe o nome do cliente"
                        />
                    </div>
                    <div className="form-inline">
                        <div className="form-group">
                            <label htmlFor="logradouro">Logradouro</label>
                            <input
                            type="text"
                            id="logradouro"
                            name="logradouro"
                            placeholder="Nome da rua para entrega"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="numero">Número</label>
                            <input
                            type="text"
                            id="numero"
                            name="numero"
                            placeholder="Informe o número"
                            />
                        </div>
                    </div>
                    <div className="form-actions">
                        <button className="button primary-light" type="submit">
                            Cadastrar
                        </button>
                        <a href="#" className="button default">
                            Cancelar
                        </a>
                    </div>
                </form>
            </Content>
        </Container>
    )
}