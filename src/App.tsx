import { BrowserRouter, Switch, Route} from 'react-router-dom'

import { Content } from "./components/Content";
import { MainContainer } from "./components/MainContainer";
import { SideBar } from "./components/SideBar";
import { GlobalStyle } from "./styles/global";

import { Dashboard } from "./pages/Dashboard";
import { Clientes } from "./pages/Clientes";


export function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <SideBar />
        <MainContainer>
          <Content>
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/customers" exact component={Clientes} />
              </Switch>
          </Content>
        </MainContainer>
      </BrowserRouter>
    </>
  );
}