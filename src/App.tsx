import { Content } from "./components/Content";
import { MainContainer } from "./components/MainContainer";
import { SideBar } from "./components/SideBar";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <SideBar />
      <MainContainer>
        <Content />
      </MainContainer>
    </>
  );
}