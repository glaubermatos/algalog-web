import { ALModal } from "../ALModal"

import { FiChevronRight } from 'react-icons/fi'

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
            headerTitle="Pesquisar cliente"
        >
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
                <div className="client-list__item" onClick={handleCustomerSelect}>
                    <div className="client-list__item-info">
                        <strong>Glauber de Oliveira Matos</strong>
                        <span>(73) 98178-7390</span>
                    </div>
                    <FiChevronRight size={24} />
                </div>
                <div className="client-list__item" onClick={handleCustomerSelect}>
                    <div className="client-list__item-info">
                        <strong>Glauber de Oliveira Matos</strong>
                        <span>(73) 98178-7390</span>
                    </div>
                    <FiChevronRight size={24} />
                </div>
                <div className="client-list__item" onClick={handleCustomerSelect}>
                    <div className="client-list__item-info">
                        <strong>Glauber de Oliveira Matos</strong>
                        <span>(73) 98178-7390</span>
                    </div>
                    <FiChevronRight size={24} />
                </div>
            </div>
        </ALModal>
    )
}