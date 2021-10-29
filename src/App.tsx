import { BrowserRouter} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import { Routes } from './routes';

import { DeliveriesProvider } from './hooks/useDeliveries';
import { CustomersProvider } from './hooks/useCustomers';

import { SideBar } from "./components/SideBar";
import { MainContainer } from "./components/MainContainer";
import { Content } from './components/Content';

import { GlobalStyle } from "./styles/global";
import 'react-toastify/dist/ReactToastify.min.css'

export function App() {

  return (
    <BrowserRouter>

      <GlobalStyle />
      <ToastContainer
        theme="light"
        position="top-center" 
        autoClose={3000}
        hideProgressBar
      />

      <SideBar />

      <MainContainer>
        <Content>
          <DeliveriesProvider>
              <CustomersProvider>
                <Routes />
              </CustomersProvider>
          </DeliveriesProvider>
        </Content>
      </MainContainer>

    </BrowserRouter>
  );
}