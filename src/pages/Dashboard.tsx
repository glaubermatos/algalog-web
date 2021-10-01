import { Header } from '../components/Header';
import { Container, Content } from '../styles/pages/dashboard'

import arrowRightImg from '../assets/images/arrow-right.svg'
import { Icon } from '../components/Icon';

export function Dashboard() {
  return (
    <Container>
        <Header helpText="Início"/>
        <Content>
          <div className="card">
            <a href="#">
              <div className="img-mask">
                <Icon name="entregas" size={64} color="primary-light" />
              </div>
              <div className="card-info">
                <h2 className="card-info-title ">Solicitações de entrega</h2>
                <strong>239</strong>
              </div>
              <img src={arrowRightImg} alt="arrow-right" />
            </a>
          </div>
          <div className="card">
            <a href="#">
              <div className="img-mask">
                <Icon name="clientes" size={64} color="primary-light" />
              </div>
              <div className="card-info">
                <h2 className="card-info-title ">Clientes cadastrados</h2>
                <strong>128</strong>
              </div>
              <img src={arrowRightImg} alt="arrow-right" />
            </a>
          </div>
        </Content>
    </Container>
  );
}