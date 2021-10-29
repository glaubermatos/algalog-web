import { Link, useHistory } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi';

import { formatDateTime, formatPrice } from '../utils/format';

import { useDeliveries } from '../hooks/useDeliveries';

import { Header } from "../components/Header";
import { Button } from '../shared/Button';

import { Container, Content, DeliveriesContainer } from "../styles/view/deliveries";

export function Entregas() {
    const history = useHistory()

    const { deliveries } = useDeliveries()

    const deliveriesAmount = deliveries.length
    const deliveriesSorted = deliveries.sort((a, b) => a.dataPedido > b.dataPedido ? -1 : 1)

    function handleLinkToCreateNewDelivery() {
        history.push('deliveries/new')
    }

    return(
        <Container>
            <Header 
                iconName="entregas"
                title="Entregas"
                helpText={`${deliveriesAmount} ${deliveriesAmount > 1 ? 'solicitações' : 'solicitação'}`}
            >
                <Button
                    type="button"
                    color="primary"
                    onClick={handleLinkToCreateNewDelivery}
                >
                    <FiPlus size={20} />
                    Nova entrega
                </Button>
            </Header>
            <Content>
                <DeliveriesContainer>
                    {deliveriesSorted.map(delivery => (
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
                </DeliveriesContainer>
            </Content>
        </Container>
    )
}