import React, { FormEvent, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa'

import { Header } from "../components/Header";
import { Container, Content } from "../styles/view/registration-customer";
import { api } from "../services/api";
import { Customer, CustomerInput } from "../types";
import { toast } from "react-toastify";
import { Button } from "../shared/Button";
import { Input } from "../shared/Input";

interface InitialFormState {
    id?: number;
    nome: string;
    email: string;
    telefone: string;
}

interface CadastroClienteParams {
    id?: string;
}

export function CadastroCliente() {
    
    const history = useHistory()

    const { id } = useParams<CadastroClienteParams>()
    const isUpdate = Number(id) ? true : false

    const [form, setForm] = useState<InitialFormState>({
        nome: '',
        email: '',
        telefone: ''
    })

    useEffect(() => {        
        async function getCustomer() {
            const response = await api.get<Customer>(`/clientes/${id}`)
            setForm(response.data)
        }

        if(isUpdate) {
            getCustomer()
        }

    }, [id, isUpdate])

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target

        setForm({
            ...form,
            [name]: value
        })
    }

    function handleFormSubmit(event: FormEvent) {
        event.preventDefault()

        form.id
            ? updateCustomer(form)
            : createCustomer(form)
    }

    function createCustomer(customer: InitialFormState) {
        api.post<CustomerInput>('/clientes', customer)
            .then(response => {
                toast.success(`Cliente cadastrado com sucesso`)
                history.push('/customers')
            })
            .catch(response => {
                console.log(response.data)
                toast.error('Não foi possível salvar os dados do cliente')
            })
    }

    function updateCustomer(customer: InitialFormState) {
        api.put<Customer>(`/clientes/${id}`, customer)
            .then(response => {
                toast.success('Dados do cliente atualizados')
                history.push('/customers')
            })
            .catch(response => {
                console.log(response)
                toast.error('Não foi possível atualizar os dados do cliente')
            })
    }

    function handleCancelRegistration() {
        history.push('/customers')
    }

    const labelOfButtonSubmit = isUpdate ? 'Atualizar' : 'Salvar'

    return(
        <Container>
            <Header 
                iconName="clientes" 
                title={isUpdate ? `Atualizar dados do cliente` : 'Novo cliente'}
                helpText={`Preencha o formulário abaixo para ${labelOfButtonSubmit.toLowerCase()} os dados do cliente`}
            >
                <Link to="/customers" className="link-button">
                    <FaArrowLeft size={14}/>
                    Voltar
                </Link>
            </Header>
            <Content>
                <form onSubmit={handleFormSubmit} autoComplete="off">
                    <Input
                        label="Nome"
                        name="nome"
                        value={form?.nome}
                        placeholder="Informe o nome do cliente"
                        onChange={handleInputChange}
                    />
                    <div className="form-inline">
                        <Input
                            label="Email"
                            name="email"
                            value={form?.email}
                            placeholder="Endereço de email"
                            onChange={handleInputChange}
                        />
                        <Input
                            label="Telefone"
                            name="telefone"
                            value={form?.telefone}
                            placeholder="Informe o número de telefone"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-actions">
                        <Button
                            type="submit"
                            color="primary"
                        >
                            {labelOfButtonSubmit}
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