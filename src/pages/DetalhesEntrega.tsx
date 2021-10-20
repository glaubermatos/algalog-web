import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaPlus } from "react-icons/fa";

import { Header } from "../components/Header";
import { Container, Content } from "../styles/pages/detalhes-entrega";
import { useState } from "react";
import { NewOccurrenceModal } from "../components/NewOccurrenceModal";

interface DetalhesEntregaParams {
    id: string
}

export function DetalhesEntrega() {
    const { id } = useParams<DetalhesEntregaParams>()

    const [isNewOccurrenceModalOpen, setIsNewOccurrenceModalOpen] = useState(false)

    function handleOpenNewOccurrenceModal() {
        setIsNewOccurrenceModalOpen(true)
    }

    function handleCloseNewOccurrenceModal() {
        setIsNewOccurrenceModalOpen(false)
    }

    return(
        <Container>
            <Header
                iconName="entregas" 
                title="Detalhes da entrega"
                helpText={`Entrega Nº ${id}`}
            >
                <Link to="/deliveries">
                    <FaArrowLeft size={14} color="#0C1D0E" />
                    Voltar
                </Link>
            </Header>
            <Content>
                <div className="header">
                    <div>
                        <span>Data do pedido</span>
                        <strong>13/08/2021 23:55</strong>
                    </div>
                    <div>
                        <span>Taxa de entrega</span>
                        <strong>R$ 25.00</strong>
                    </div>
                    <div>
                        <span>Data finalização</span>
                        <strong>13/08/2021 23:55</strong>
                    </div>
                    <div>
                        <select className="primary-extra-light" name="" id="">
                        <option value="">Pendente</option>
                        <option value="">Finalizada</option>
                        <option value="">Cancelada</option>
                        </select>
                    </div>
                </div>
                <div className="body">
                    <section className="dados">
                        <div className="cliente">
                            <div className="separator">
                                <h3>Cliente</h3>
                            </div>
                            <div className="box-separator">
                                <div className="input-group">
                                    <span>Nome</span>
                                    <p>José de Assis atualizado</p>
                                </div>
                                <div className="inline">
                                    <div className="input-group">
                                        <span>Email</span>
                                        <p>jeseassis@email.com</p>
                                    </div>
                                    <div className="input-group">
                                        <span>Telefone</span>
                                        <p>(73) 98178-7390</p>
                                    </div>
                                </div>
                                <div className="endereco">
                                    <div className="separator">
                                        <h3>Endereço</h3>
                                    </div>
                                    <div className="input-group">
                                        <span>Nome</span>
                                        <p>José de Assis atualizado</p>
                                    </div>
                                    <div className="input-group">
                                        <span>Logradouro</span>
                                        <p>Rua Padre Vicente Santename</p>
                                    </div>
                                    <div className="inline">
                                        <div className="input-group">
                                            <span>Número</span>
                                            <p>S/N</p>
                                        </div>
                                        <div className="input-group">
                                            <span>Complemento</span>
                                            <p>Casa</p>
                                        </div>
                                        <div className="input-group">
                                            <span>Bairro</span>
                                            <p>Centro</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="ocorrencias">
                        <div className="separator">
                            <h3>Ocorrências</h3>
                            <span className="ocorrencias-total">3 ocorrências</span>
                        </div>
                        <div className="actions">
                            <button
                                id="btnNovaOcorrencia"
                                className="button primary-light"
                                onClick={handleOpenNewOccurrenceModal}
                            >
                                <FaPlus size={14} />
                                Nova ocorrência
                            </button>
                        </div>
                        <ul>
                            <li className="danger">
                                <strong>Tentativa de entrega sem sucesso</strong>
                                <span>15/08/2021 13:35</span>
                            </li>
                            <li className="danger">
                                <strong>Tentativa de entrega sem sucesso</strong>
                                <span>15/08/2021 13:35</span>
                            </li>
                            <li className="primary-light">
                                <strong>Entrege com sucesso</strong>
                                <span>15/08/2021 13:35</span>
                            </li>
                        </ul>
                    </section>
                </div>

                <NewOccurrenceModal
                    isOpen={isNewOccurrenceModalOpen}
                    onRequestClose={handleCloseNewOccurrenceModal}
                />
            </Content>
        </Container>
    )
}