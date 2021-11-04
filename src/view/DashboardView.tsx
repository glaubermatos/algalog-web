import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi'

import { useDeliveries } from '../hooks/useDeliveries';
import { useCustomers } from '../hooks/useCustomers';

import { Header } from '../components/Header';
import { Icon } from '../components/Icon';

import { Container, Content } from '../styles/view/dashboard'

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
                <h2 className="card-info-title ">Entregas</h2>
                <strong>{deliveriesAmount}</strong>
              </div>
              <FiChevronRight size={32} strokeWidth={1.5}/>
            </Link>
          </div>
          <div className="card">
            <Link to="/customers">
              <div className="img-mask">
                <Icon strokeWidth="2" name="clientes" size={64} color="primary-light" />
              </div>
              <div className="card-info">
                <h2 className="card-info-title ">Clientes</h2>
                <strong>{customersAmount}</strong>
              </div>
              <FiChevronRight size={32} strokeWidth={1.5}/>
            </Link>
          </div>
        </Content>
    </Container>
  );
}