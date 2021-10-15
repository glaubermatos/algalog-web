import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Container } from "../styles/pages/nova-entrega";

export function NovaEntrega() {
    return(
        <Container>
            <Header
                iconName="entregas"
                title="Nova solicitação de entrega"
                helpText="Preencha o formulário abaixo para solicitar nova entrega"
            >
                <Link to="/deliveries">
                    <FaArrowLeft size={14} color="#0C1D0E" />
                    Voltar
                </Link>
            </Header>
        </Container>
    )
}