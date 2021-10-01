import { ReactNode } from "react";
import { Container } from "./styles";

interface ContentProps {
    children: ReactNode
}

export function Content(props: ContentProps) {
    return(
        <Container>
            {props.children}
        </Container>
    );
}