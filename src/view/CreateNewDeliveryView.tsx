import React, { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { FiArrowLeft, FiSearch } from "react-icons/fi";

import { useDeliveries } from "../hooks/useDeliveries";

import { DeliveryInput } from '../types'

import { Header } from "../components/Header";
import { SearchCustomerModal } from "../components/Modal/SearchCustomerModal";

import { Button } from "../shared/Button";
import { Input } from "../shared/Input";

import { Container, Content } from "../styles/view/create-new-delivery";

export function CreateNewDelivery() {

    const history = useHistory()
    const { createDelivery } = useDeliveries()
    
    const [isSearchCustomerModalOpen, setIsSearchCustomerModalOpen] = useState(false)

    const initialFormState: DeliveryInput = {
        cliente: {
            id: 0
        },
        destinatario: {
            nome: '',
            logradouro: '',
            numero: '',
            complemento: '',
            bairro: '',
        },
        taxa: 0
    }

    const [form, setForm] = useState<DeliveryInput>(initialFormState)


    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        try {
            await createDelivery(form)
            
            toast.success(`Entrega emitida com sucesso!`)
            history.push('/deliveries')
        } catch(error) {
            console.log(error)
            toast.error('Não foi possível salvar os dados da entrega')
        }
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value } = event.target
        let formUpdate = {...form};

        switch (name) {
            case 'taxa':
                formUpdate.taxa = Number(value)
                break;
        
            case 'logradouro':
                formUpdate.destinatario.logradouro = value
                break;
        
            case 'numero':
                formUpdate.destinatario.numero = value
                break;
        
            case 'complemento':
                formUpdate.destinatario.complemento = value
                break;
        
            case 'bairro':
                formUpdate.destinatario.bairro = value
                break;
        
            default:
                break;
        }
        setForm(formUpdate)
    }

    function handleCustomerSelected(id: number, name: string) {
        setForm({
            ...form
            , cliente: {
                id
            }, 
            destinatario: {
                ...form.destinatario, 
                nome: name
            }
        })
    }

    function handleOpenSearchCustomerModal() {
        setIsSearchCustomerModalOpen(true)
    }

    function handleCloseSearchCustomerModal() {
        setIsSearchCustomerModalOpen(false)
    }

    function handleCancelRegistration() {
        history.push('/deliveries')
    }

    return(
        <Container>
            <Header
                iconName="entregas"
                title="Nova entrega"
                helpText="Preencha o formulário abaixo para solicitar nova entrega"
            >
                <Link to="/deliveries" className="link-button">
                    <FiArrowLeft size={19} />
                    Voltar
                </Link>
            </Header>
            <Content>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <Input
                        label="Cliente"
                        name="cliente"
                        value={form?.destinatario.nome}
                        placeholder="Pesquisar cliente ..."
                        onChange={handleInputChange}
                        readOnly
                        onClick={handleOpenSearchCustomerModal}
                        addOn={<FiSearch size={19} />}
                    />
                    <Input
                        type="number"
                        name="taxa"
                        value={form?.taxa}
                        label="Taxa de entrega"
                        placeholder="Valor da taxa de entrega"
                        onChange={handleInputChange}
                        addOn={"R$"}
                    />
                    <h2>Endereço para entrega</h2>
                    <div className="form-inline">
                        <Input
                            label="Logradouro"
                            name="logradouro"
                            value={form?.destinatario.logradouro}
                            placeholder="Nome da rua para entrega"
                            onChange={handleInputChange}
                        />
                        <Input
                            label="Número"
                            name="numero"
                            value={form?.destinatario.numero}
                            placeholder="Informe o número"
                            onChange={handleInputChange}
                        />
                        <Input
                            label="Comoplemento"
                            name="complemento"
                            value={form?.destinatario.complemento}
                            placeholder="Complemento"
                            onChange={handleInputChange}
                        />
                        <Input
                            label="Bairro"
                            name="bairro"
                            value={form?.destinatario.bairro}
                            placeholder="Informe o bairro para entrega"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-actions">
                        <Button
                            type="submit"
                            color="primary"
                        >
                            Solicitar entrega
                        </Button>
                        <Button
                            type="button"
                            onClick={handleCancelRegistration}
                        >
                            Cancelar
                        </Button>
                    </div>
              </form>
              <SearchCustomerModal
                isOpen={isSearchCustomerModalOpen}
                onRequestClose={handleCloseSearchCustomerModal}
                onCustomerSelected={handleCustomerSelected}
              />
            </Content>
        </Container>
    )
}