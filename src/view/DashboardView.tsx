import { Link } from 'react-router-dom';

import { Header } from '../components/Header';
import { Container, Content } from '../styles/view/dashboard'

import arrowRightImg from '../assets/images/arrow-right.svg'
import { Icon } from '../components/Icon';
import { useDeliveries } from '../hooks/useDeliveries';
import { useCustomers } from '../hooks/useCustomers';

export function Dashboard() {

  const { deliveries } = useDeliveries()
  const { customers } = useCustomers()

  const deliveriesAmount = deliveries.length
  const customersAmount = customers.length


  return (
    <Container>
        <Header
          iconName="home"
          title="Dashboard"
          helpText="Início"
        />
        <Content>
          <div className="card">
            <Link to="/deliveries">
              <div className="img-mask">
                <Icon strokeWidth="2" name="entregas" size={64} color="primary-light" />
              </div>
              <div className="card-info">
                <h2 className="card-info-title ">Solicitações de entrega</h2>
                <strong>{deliveriesAmount}</strong>
              </div>
              <img src={arrowRightImg} alt="arrow-right" />
            </Link>
          </div>
          <div className="card">
            <Link to="/customers">
              <div className="img-mask">
                <Icon strokeWidth="2" name="clientes" size={64} color="primary-light" />
              </div>
              <div className="card-info">
                <h2 className="card-info-title ">Clientes cadastrados</h2>
                <strong>{customersAmount}</strong>
              </div>
              <img src={arrowRightImg} alt="arrow-right" />
            </Link>
          </div>
        </Content>
    </Container>
  );
}