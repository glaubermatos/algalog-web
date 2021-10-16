import { useHistory } from 'react-router-dom'

import { Header } from "../components/Header";
import { Container, Content } from "../styles/pages/entregas";

export function Entregas() {
    const history = useHistory()
    return(
        <Container>
            <Header 
                iconName="entregas"
                title="Solicitações de entrega"
                helpText="3 solicitações"
            >
                <button className="button primary-light" onClick={() => history.push('/deliveries/new')}>
                    Nova solicitação
                </button>
            </Header>
            <Content>
                <div className="card">
                    <a href="#">
                        <div className="header">
                            <div>
                                <span>Data do pedido</span>
                                <strong>13/08/2021 23:55</strong>
                            </div>
                            <label className="status cancelada">Cancelada</label>
                        </div>
                        <div className="body">
                            <div className="cliente">
                                <label>Cliente</label>
                                <p>João das Couves</p>
                            </div>
                            <div className="taxa">
                                <label>Taxa de entrega</label>
                                <strong>R$ 15.00</strong>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="card">
                    <a href="#">
                        <div className="header">
                            <div>
                                <span>Data do pedido</span>
                                <strong>13/08/2021 23:55</strong>
                            </div>
                            <label className="status pendente">Pendente</label>
                        </div>
                        <div className="body">
                            <div className="cliente">
                                <label>Cliente</label>
                                <p>João das Couves</p>
                            </div>
                            <div className="taxa">
                                <label>Taxa de entrega</label>
                                <strong>R$ 15.00</strong>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="card">
                    <a href="#">
                        <div className="header">
                            <div>
                                <span>Data do pedido</span>
                                <strong>13/08/2021 23:55</strong>
                            </div>
                            <label className="status finalizado">Finalizada</label>
                        </div>
                        <div className="body">
                            <div className="cliente">
                                <label>Cliente</label>
                                <p>João das Couves</p>
                            </div>
                            <div className="taxa">
                                <label>Taxa de entrega</label>
                                <strong>R$ 15.00</strong>
                            </div>
                        </div>
                    </a>
                </div>
            </Content>
        </Container>
    )
}