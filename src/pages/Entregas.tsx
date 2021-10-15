import { useHistory } from 'react-router-dom'

import { Header } from "../components/Header";
import { Container } from "../styles/pages/entregas";

export function Entregas() {
    const history = useHistory()
    return(
        <Container>
            <Header 
                iconName="entregas"
                title="Solicitações de entrega"
                helpText="3 solicitações"
            >
                <button onClick={() => history.push('/deliveries/new')}>
                    Nova solicitação
                </button>
            </Header>
        </Container>
    )
}