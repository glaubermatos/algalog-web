import { ALModal } from "../ALModal"

import { FiChevronRight, FiX } from 'react-icons/fi'
import { Header } from "../Header"

interface SearchCustomerModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    onCustomerSelected: (id: number, name: string) => void;
}

export function SearchCustomerModal({isOpen, onRequestClose, onCustomerSelected }: SearchCustomerModalProps) {

    function handleCustomerSelect() {
        onCustomerSelected(1, 'Glauber de Oliveira Matos')
        onRequestClose()
    }

    return(
        <ALModal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
              >
                <Header title="Pesquisar cliente">
                    <button className="link-button" onClick={onRequestClose}>
                        <FiX size={19} color="#0C1D0E" />
                        Fechar
                    </button>
                </Header>
                <form style={{marginTop: '3rem'}}>
                    <div className="form-group">
                        <label htmlFor="nomeCliente">Cliente</label>
                        <input
                            type="text"
                            id="nomeCliente"
                            name="nome"
                            placeholder="Digite o nome do cliente para pesquisar"
                        />
                    </div>
                </form>
                <div className="client-list">
                    <a className="client-list__item" onClick={handleCustomerSelect}>
                        <div className="client-list__item-info">
                            <strong>Glauber de Oliveira Matos</strong>
                            <span>(73) 98178-7390</span>
                        </div>
                        <FiChevronRight size={24} />
                    </a>
                    <a className="client-list__item" href="#">
                        <div className="client-list__item-info">
                            <strong>Glauber de Oliveira Matos</strong>
                            <span>(73) 98178-7390</span>
                        </div>
                        <FiChevronRight size={24} />
                    </a>
                    <a className="client-list__item" href="#">
                        <div className="client-list__item-info">
                            <strong>Glauber de Oliveira Matos</strong>
                            <span>(73) 98178-7390</span>
                        </div>
                        <FiChevronRight size={24} />
                    </a>
                </div>
              </ALModal>
    )
}