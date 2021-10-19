import { Container } from "./styles";
import { Icon } from "../Icon";
import { Title } from "../../styles/global";
import { ReactNode } from "react";

interface HeaderProps {
    iconName?: 'home' | 'entregas' | 'clientes';
    title: string;
    helpText?: string;
    children?: ReactNode;
}

export function Header({iconName, title, helpText, children}: HeaderProps) {
    return(
        <Container>
            <div className="info-container">
                {iconName ? (
                    <Icon size={36} name={ iconName } color="gray" />
                ) : (<></>)}
                <div className="box-title">
                    <Title>{ title }</Title>
                    {helpText ? (
                        <span>{ helpText }</span>
                    ) : (<></>)}
                </div>
            </div>
            <div className="actions">
                {children}
            </div>
        </Container>
    );
}