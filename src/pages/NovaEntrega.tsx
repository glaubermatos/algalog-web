import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Container, Content } from "../styles/pages/nova-entrega";

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
            <Content>
                <form action="#" autoComplete="off">
                    <div className="form-group">
                        <label htmlFor="cliente">Cliente</label>
                        <div className="input-group">
                            <span className="input-group-addon">
                                <FaSearch size={18} color="#0C1D0E"/>
                            </span>
                            <input
                                type="text"
                                id="cliente"
                                name="cliente"
                                placeholder="Pesquisar cliente ..."
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="taxa">Taxa de entrega</label>
                        <div className="input-group">
                            <span className="input-group-addon">
                                R$
                            </span>
                            <input
                                type="text"
                                id="taxa"
                                name="taxa"
                                placeholder="Valor da taxa de entrega"
                            />
                        </div>
                    </div>
                    <h2>Endereço para entrega</h2>
                    <div className="form-inline">
                        <div className="form-group">
                            <label htmlFor="logradouro">Logradouro</label>
                            <input
                            type="text"
                            id="logradouro"
                            name="logradouro"
                            placeholder="Nome da rua para entrega"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="numero">Número</label>
                            <input
                            type="text"
                            id="numero"
                            name="numero"
                            placeholder="Informe o número"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="complemento">Complemento</label>
                            <input
                            type="text"
                            id="complemento"
                            name="complemento"
                            placeholder="Complemento"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bairro">Bairro</label>
                            <input
                            type="text"
                            id="bairro"
                            name="bairro"
                            placeholder="Bairro para entrega"
                            />
                        </div>
                    </div>
                    <div className="form-actions">
                        <button className="button primary-light" type="submit">
                            Solicitar
                        </button>
                        <a href="#" className="button default">
                            Cancelar
                        </a>
                    </div>
              </form>
            </Content>
        </Container>
    )
}