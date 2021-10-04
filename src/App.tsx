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
      <SideBar />
      <MainContainer>
        <Content>
          <Clientes></Clientes>
          {/* <Dashboard /> */}
        </Content>
      </MainContainer>
    </>
  );
}