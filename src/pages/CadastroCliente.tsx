import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa'

import { Header } from "../components/Header";
import { Container, Content } from "../styles/pages/cadastro-cliente";
import { api } from "../services/api";
import { Customer } from "../types";
import { toast } from "react-toastify";
import { Button } from "../shared/Button";

interface ResponseCustomer {
    cliente: Customer
}

export function CadastroCliente() {
    
    const history = useHistory()

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        const response = await api.post<ResponseCustomer>('/clientes', {nome, email, telefone})
        if(response.status === 201) {
            toast.success(`Cliente cadastrado com sucesso!`)
            history.push('/customers')
        }
    }

    function handleCancelRegistration() {
        history.push('/customers')
    }

    return(
        <Container>
            <Header 
                iconName="clientes" 
                title="Novo cliente"
                helpText="Preencha o formulário abaixo para cadastrar um novo cliente"
            >
                <Link to="/customers" className="link-button">
                    <FaArrowLeft size={14}/>
                    Voltar
                </Link>
            </Header>
            <Content>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Informe o nome do cliente"
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                        />
                    </div>
                    <div className="form-inline">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Endereço de email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefone">Telefone</label>
                            <input
                            type="text"
                            id="telefone"
                            name="telefone"
                            placeholder="Informe o número de telefone"
                            value={telefone}
                            onChange={(event) => setTelefone(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-actions">
                        <Button
                            type="submit"
                            color="primary"
                        >
                            Salvar
                        </Button>
                        <Button
                            type="button"
                            onClick={handleCancelRegistration}
                        >
                            Cancelar
                        </Button>
                    </div>
                </form>
            </Content>
        </Container>
    )
}