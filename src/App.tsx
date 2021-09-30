import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <SideBar />
      <Content />
    </>
  );
}