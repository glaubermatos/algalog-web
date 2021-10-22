import { BrowserRouter, Switch, Route} from 'react-router-dom'

import { ToastContainer } from 'react-toastify';

import { Content } from "./components/Content";
import { MainContainer } from "./components/MainContainer";
import { SideBar } from "./components/SideBar";
import { GlobalStyle } from "./styles/global";

import { Dashboard } from "./pages/Dashboard";
import { Clientes } from "./pages/Clientes";
import { CadastroCliente } from './pages/CadastroCliente';
import { Entregas } from './pages/Entregas';
import { NovaEntrega } from './pages/NovaEntrega';
import { DetalhesEntrega } from './pages/DetalhesEntrega';

import 'react-toastify/dist/ReactToastify.min.css'


export function App() {

  return (
    <>
      <GlobalStyle />
      <ToastContainer
        theme="light"
        position="top-right" 
        autoClose={3000}
      />
      <BrowserRouter>
        <SideBar />
        <MainContainer>
          <Content>
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/deliveries" exact component={Entregas} />
                <Route path="/deliveries/new" component={NovaEntrega} />
                <Route path="/deliveries/:id" component={DetalhesEntrega} />
                <Route path="/customers" exact component={Clientes} />
                <Route path="/customers/new" component={CadastroCliente} />
              </Switch>
          </Content>
        </MainContainer>
      </BrowserRouter>
    </>
  );
}