import { ChangeEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FaArrowLeft, FaPlus } from "react-icons/fa";

import { useDeliveries } from "../hooks/useDeliveries";

import { api } from "../services/api";

import { formatDateTime, formatPrice } from "../utils/format";

import { Delivery, Occurrence } from "../types";

import { Header } from "../components/Header";
import { NewOccurrenceModal } from "../components/Modal/NewOccurrenceModal";
import { Button } from "../shared/Button";

import { Container, Content } from "../styles/view/delivery-details";

interface DetalhesEntregaParams {
    id: string
}

interface DeliveryFormatted {
    id: number,
    cliente: {
        id: number,
        nome: string
    },
    destinatario: {
        nome: string,
        logradouro: string,
        numero: string,
        complemento: string,
        bairro: string
    },
    taxa: number,
    taxaFormatada: string,
    status: 'FINALIZADO' | 'PENDENTE' | 'CANCELADO',
    dataPedido: string,
    dataFinalizacao: string
}

export function DetalhesEntrega() {
    const params = useParams<DetalhesEntregaParams>()
    const id = Number(params.id)

    const { changeStatus } = useDeliveries()

    const [deliveryFormatted, setDeliveryFormatted] = useState<DeliveryFormatted>()
    const [occurrences, setOccurrences] = useState<Occurrence[]>([])
    const [statusChanged, setStatusChanged] = useState('')

    useEffect(() => {
        api.get<Delivery>(`/entregas/${id}`)
            .then(response => {
                const delivery = response.data

                setDeliveryFormatted({
                    ...delivery,
                    taxaFormatada: formatPrice(delivery.taxa),
                    dataPedido: formatDateTime(new Date(delivery.dataPedido)),
                    dataFinalizacao: delivery.dataFinalizacao !== null ? formatDateTime(new Date(delivery.dataFinalizacao)) : '-'
                })
            })
        }, [id, statusChanged])
        
    useEffect(() => {
        loadOcorrencias()  
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleChangeStatusDelivery(event: ChangeEvent<HTMLSelectElement>) {
        const status = event.target.value

        changeStatus(id, status.toUpperCase())

        setStatusChanged(status.toUpperCase())
        toast.success(`Entrega Nº ${id} ${status.toLowerCase()}`)
    }

    function loadOcorrencias() {
        api.get<Occurrence[]>(`/entregas/${id}/ocorrencias`)
        .then(response => {
            const occurrences = response.data.map(occurrence => ({
                ...occurrence,
                dataRegistro: formatDateTime(new Date(occurrence.dataRegistro))
            }))
            setOccurrences(occurrences)
        })
    }

    const [isNewOccurrenceModalOpen, setIsNewOccurrenceModalOpen] = useState(false)

    function handleOpenNewOccurrenceModal() {
        setIsNewOccurrenceModalOpen(true)
    }

    function handleCloseNewOccurrenceModal() {
        setIsNewOccurrenceModalOpen(false)
    }

    return(
        <Container>
            <Header
                iconName="entregas" 
                title="Detalhes da entrega"
                helpText={`Entrega Nº ${id}`}
            >
                <Link to="/deliveries" className="link-button">
                    <FaArrowLeft size={14} color="#0C1D0E" />
                    Voltar
                </Link>
            </Header>
            <Content>
                <div className="header">
                    <div>
                        <span>Data do pedido</span>
                        <strong>{deliveryFormatted?.dataPedido}</strong>
                    </div>
                    <div>
                        <span>Taxa de entrega</span>
                        <strong>{deliveryFormatted?.taxaFormatada}</strong>
                    </div>
                    <div>
                        <span>Data finalização</span>
                        <strong>{deliveryFormatted?.dataFinalizacao}</strong>
                    </div>
                    <div>
                        <span>Status</span>
                        <select 
                            disabled={deliveryFormatted?.status !== 'PENDENTE'}
                            value={deliveryFormatted?.status} 
                            defaultValue={'PENDENTE'} 
                            className={`${deliveryFormatted?.status.toLowerCase()}`}
                            onChange={handleChangeStatusDelivery}
                        >
                            <option value="PENDENTE">Pendente</option>
                            <option value="FINALIZADO">Finalizado</option>
                            <option value="CANCELADO">Cancelado</option>
                        </select>
                    </div>
                </div>
                <div className="body">
                    <section className="dados">
                        <div className="cliente">
                            <div className="separator">
                                <h3>Cliente</h3>
                            </div>
                            <div className="box-separator">
                                <div className="input-group">
                                    <span>Nome</span>
                                    <p>{deliveryFormatted?.cliente.nome}</p>
                                </div>
                                {/* <div className="inline">
                                    
                                </div> */}
                                <div className="endereco">
                                    <div className="separator">
                                        <h3>Endereço</h3>
                                    </div>
                                    <div className="input-group">
                                        <span>Nome</span>
                                        <p>{deliveryFormatted?.cliente.nome}</p>
                                    </div>
                                    <div className="input-group">
                                        <span>Logradouro</span>
                                        <p>{deliveryFormatted?.destinatario.logradouro}</p>
                                    </div>
                                    <div className="inline">
                                        <div className="input-group">
                                            <span>Número</span>
                                            <p>{deliveryFormatted?.destinatario.numero}</p>
                                        </div>
                                        <div className="input-group">
                                            <span>Complemento</span>
                                            <p>{deliveryFormatted?.destinatario.complemento}</p>
                                        </div>
                                        <div className="input-group">
                                            <span>Bairro</span>
                                            <p>{deliveryFormatted?.destinatario.bairro}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="ocorrencias">
                        <div className="separator">
                            <h3>Ocorrências</h3>
                            <span className="ocorrencias-total">
                                {`${occurrences.length} ${occurrences.length > 1 ? 'ocorrências' : 'ocorrência'}`}
                            </span>
                        </div>
                        <div className="actions">
                            <Button
                                type="button"
                                color="primary"
                                onClick={handleOpenNewOccurrenceModal}
                                disabled={deliveryFormatted?.status !== 'PENDENTE'}
                            >
                                <FaPlus size={14} />
                                Nova ocorrência
                            </Button>
                        </div>
                        <ul>
                            {occurrences.map(occurrence => (
                                <li className="danger" key={occurrence.id}>
                                    <strong>{occurrence.descricao}</strong>
                                    <span>{occurrence.dataRegistro}</span>
                                </li>

                            ))}

                            {deliveryFormatted?.status === 'FINALIZADO' ? (
                                <li className="finalizado">
                                    <strong>Entrega finalizada</strong>
                                    <span>{deliveryFormatted?.dataFinalizacao}</span>
                                </li>

                            ) : null}
                        </ul>
                    </section>
                </div>

                <NewOccurrenceModal
                    isOpen={isNewOccurrenceModalOpen}
                    onRequestClose={handleCloseNewOccurrenceModal}
                    entregaId={id}
                    onLoadOccurrences={loadOcorrencias}
                />
            </Content>
        </Container>
    )
}