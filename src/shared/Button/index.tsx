import { ReactNode } from "react";
import { JsxElement } from "typescript";

import { Container } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: 'primary' | 'default' | 'danger'
    onClick?: () => void;
    children?: ReactNode;
}

export function Button({color = 'default', onClick, children, ...props}: ButtonProps) {
    return(
        <Container
            onClick={onClick}
            color={color} 
            {...props}
        >
            {children || 'nameless'}
        </Container>
    );
}