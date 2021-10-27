import { BrowserRouter, Switch, Route} from 'react-router-dom'

import { ToastContainer } from 'react-toastify';

import { Content } from "./components/Content";
import { MainContainer } from "./components/MainContainer";
import { SideBar } from "./components/SideBar";

import { Dashboard } from "./view/DashboardView";
import { Clientes } from "./view/CustomersView";
import { CadastroCliente } from './view/RegistrationCustomerView';
import { Entregas } from './view/DeliveriesView';
import { NovaEntrega } from './view/CreateNewDeliveryView';
import { DetalhesEntrega } from './view/DeliveryDetailsView';

import 'react-toastify/dist/ReactToastify.min.css'

import { GlobalStyle } from "./styles/global";
import { DeliveriesProvider } from './hooks/useDeliveries';

export function App() {

  return (
    <>
      <GlobalStyle />
      <ToastContainer
        theme="light"
        position="top-center" 
        autoClose={3000}
        hideProgressBar
      />
      <BrowserRouter>
        <SideBar />
        <MainContainer>
          <Content>
              <DeliveriesProvider>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/deliveries" exact component={Entregas} />
                    <Route path="/deliveries/new" exact component={NovaEntrega} />
                    <Route path="/deliveries/:id" component={DetalhesEntrega} />
                    <Route path="/customers" exact component={Clientes} />
                    <Route path="/customers/:id" component={CadastroCliente} />
                    <Route path="/customers/new" component={CadastroCliente} />
                </Switch>
              </DeliveriesProvider>
          </Content>
        </MainContainer>
      </BrowserRouter>
    </>
  );
}