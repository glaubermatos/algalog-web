import { Content } from "./components/Content";
import { MainContainer } from "./components/MainContainer";
import { SideBar } from "./components/SideBar";
import { GlobalStyle } from "./styles/global";

import { Dashboard } from "./pages/Dashboard";

export function App() {
  return (
    <>
      <GlobalStyle />
      <SideBar />
      <MainContainer>
        <Content>
          <Dashboard />
        </Content>
      </MainContainer>
    </>
  );
}