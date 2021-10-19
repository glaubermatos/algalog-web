import { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom'

import { Delivery, DeliveryResponse } from '../types';

import { Header } from "../components/Header";
import { Container, Content } from "../styles/pages/entregas";
import { api } from '../services/api';
import { formatDateTime, formatPrice } from '../utils/format';

export function Entregas() {
    const history = useHistory()

    const [deliveries, setDeliveries] = useState<Delivery[]>([])
    const [deliveriesAmount, setDeliveriesAmount] = useState(0)

    useEffect(() => {
        api.get<DeliveryResponse>('/entregas')
            .then(response => {
                setDeliveries(response.data.entregas)
                setDeliveriesAmount(response.data.entregas.length)
            })
    }, [])

    return(
        <Container>
            <Header 
                iconName="entregas"
                title="Solicitações de entrega"
                helpText={`${deliveriesAmount} ${deliveriesAmount > 1 ? 'solicitações' : 'solicitação'}`}
            >
                <button className="button primary-light" onClick={() => history.push('/deliveries/new')}>
                    <FiPlus size={20} />
                    Nova solicitação
                </button>
            </Header>
            <Content>
                {deliveries.map(delivery => (
                    <div key={delivery.id} className="card">
                        <Link to={`/deliveries/${delivery.id}`}>
                            <div className="header">
                                <div>
                                    <span>Data do pedido</span>
                                    <strong>{formatDateTime(new Date(delivery.dataPedido))}</strong>
                                </div>
                                <label className={`status ${delivery.status.toLowerCase()}`}>{delivery.status}</label>
                            </div>
                            <div className="body">
                                <div className="cliente">
                                    <label>Cliente</label>
                                    <p>{delivery.cliente.nome}</p>
                                </div>
                                <div className="taxa">
                                    <label>Taxa de entrega</label>
                                    <strong>{formatPrice(delivery.taxa)}</strong>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </Content>
        </Container>
    )
}