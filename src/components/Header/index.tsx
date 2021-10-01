import { Container } from "./styles";
import { Icon } from "../Icon";
import { Title } from "../../styles/global";
import { ReactNode } from "react";

interface HeaderProps {
    helpText: string;
    children?: ReactNode;
}

export function Header({helpText, children}: HeaderProps) {
    return(
        <Container>
            <div className="info-container">
                <Icon size={36} name="home" color="gray" />
                <div className="box-title">
                    <Title>Dashboard</Title>
                    <span>{helpText}</span>
                </div>
            </div>
            <div className="actions">
                {children}
            </div>
        </Container>
    );
}