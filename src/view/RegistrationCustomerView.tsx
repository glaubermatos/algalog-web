import React, { FormEvent, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FaArrowLeft } from 'react-icons/fa'

import { useCustomers } from "../hooks/useCustomers";

import { Customer } from "../types";

import { Header } from "../components/Header";
import { Button } from "../shared/Button";
import { Input } from "../shared/Input";

import { Container, Content } from "../styles/view/registration-customer";

interface InitialFormState {
    id?: number;
    nome: string;
    email: string;
    telefone: string;
}

interface CadastroClienteParams {
    id?: string;
}

export function RegistrationCustomer() {

    const { createCustomer, updateCustomer, showCustomer } = useCustomers()
    
    const history = useHistory()

    const { id } = useParams<CadastroClienteParams>()
    const isUpdate = Number(id) ? true : false

    const [form, setForm] = useState<InitialFormState>({
        nome: '',
        email: '',
        telefone: ''
    })

    useEffect(() => {
        if(isUpdate) {
            showCustomer(Number(id))
            .then(customer => {
                const customerFormated = {
                    ...customer, 
                    telefone: customer.telefone.replace(/D/g,"")
                }
                    
                setForm(customerFormated)
                })
            }
            
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            ? onUpdateCustomer(form as Customer)
            : onCreateNewCustomer(form)
    }

    function onCreateNewCustomer(customer: InitialFormState) {
        try {            
            const newCustomer = {...customer, telefone: handleFormatPhone()}

            createCustomer(newCustomer)

            toast.success(`Cliente cadastrado com sucesso`)
            history.push('/customers')
        } catch(error) {
            console.log(error)
            toast.error('Não foi possível salvar os dados do cliente')
        }
    }

    function onUpdateCustomer(customer: Customer) {
        try { 
            const newCustomer = {...customer, telefone: handleFormatPhone()}

            updateCustomer(newCustomer)
            
            toast.success('Dados do cliente atualizados')
            history.push('/customers')
        } catch(error) {
            console.log(error)
            toast.error('Dados do cliente não atualizados')
        }
    }

    function handleCancelRegistration() {
        history.push('/customers')
    }

    function handleFormatPhone() {
        const phone = form.telefone
            .replace(/D/g, "")

        return phone
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
                            type="tel"
                            mask="(99) 99999-9999"
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