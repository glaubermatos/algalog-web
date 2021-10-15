import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa'

import { Header } from "../components/Header";
import { Container } from "../styles/pages/cadastro-cliente";

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
        </Container>
    )
}