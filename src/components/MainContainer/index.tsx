import { ReactNode } from "react";
import { Container } from "./styles";

interface MainContainerProps {
    children: ReactNode
}

export function MainContainer(props: MainContainerProps) {
    return(
        <Container>
            {props.children}
        </Container>
    );
}