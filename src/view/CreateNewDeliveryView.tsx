import React, { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft, FiSearch } from "react-icons/fi";

import { api } from "../services/api";

import { Delivery } from '../types'

import { Header } from "../components/Header";
import { SearchCustomerModal } from "../components/Modal/SearchCustomerModal";

import { Container, Content } from "../styles/pages/nova-entrega";
import { toast } from "react-toastify";
import { Button } from "../shared/Button";
import { Input } from "../shared/Input";

interface InitialFormState {
    cliente: {
        id: number
    },
    destinatario: {
        nome: string,
        logradouro: string,
        numero: string,
        complemento: string,
        bairro: string,
    },
    taxa: number
}

export function NovaEntrega() {
    const history = useHistory()

    const [form, setForm] = useState<InitialFormState>({
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
    })

    const [isSearchCustomerModalOpen, setIsSearchCustomerModalOpen] = useState(false)

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        try {
            const response = await api.post<Delivery>('/entregas', form)
            const delivery = response.data
            
            toast.success(`Entrega Nº ${delivery.id} emitida com sucesso!`)
            history.push('/deliveries')
        } catch(error) {
            console.log(error)
            alert(error)
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
                title="Nova solicitação de entrega"
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
                    {/* <div className="form-group">
                        <label htmlFor="cliente">Cliente</label>
                        <div className="input-group">
                            <span className="input-group-addon">
                                <FiSearch size={18} color="#0C1D0E"/>
                            </span>
                            <input
                                type="text"
                                id="cliente"
                                name="cliente"
                                placeholder="Pesquisar cliente ..."
                                readOnly
                                onClick={handleOpenSearchCustomerModal}
                                value={nomeDestinatario}
                                onChange={(event) => setClienteId(Number(event.target.value))}
                            />
                        </div>
                    </div> */}
                    <Input
                        type="number"
                        name="taxa"
                        value={form?.taxa}
                        label="Taxa de entrega"
                        placeholder="Valor da taxa de entrega"
                        onChange={handleInputChange}
                        addOn={"R$"}
                    />
                    {/* <div className="form-group">
                        <label htmlFor="taxa">Taxa de entrega</label>
                        <div className="input-group">
                            <span className="input-group-addon">
                                R$
                            </span>
                            <input
                                type="number"
                                id="taxa"
                                name="taxa"
                                placeholder="Valor da taxa de entrega"
                                value={taxa}
                                onChange={(event) => {
                                    setTaxa(Number(event.target.value))
                                }}
                            />
                        </div>
                    </div> */}
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