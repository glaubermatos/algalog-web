import { FiTrash2 } from "react-icons/fi";

import { Modal } from "../";
import { Button } from "../../../shared/Button";

import { Customer } from "../../../types";
import { Content } from "./styles";

interface DeleteCustomerModalProps {
    isDeleteCustomerModalOpen: boolean;
    customerToDelete: Customer;
    onRequestClose: () => void;
    onDeleteCustomer: (customer: Customer) => void;
}

export function DeleteCustomerModal({
    customerToDelete, 
    isDeleteCustomerModalOpen, 
    onRequestClose, 
    onDeleteCustomer }: DeleteCustomerModalProps) {


    function handleCloseDeleteCustomerModal() {
        onRequestClose()
    }

    function handleDeleteCustomer(customer: Customer) {
        onDeleteCustomer(customer)
    }

    return(
        <Modal
            headerTitle="Excluir cliente" 
            isOpen={isDeleteCustomerModalOpen}
            onRequestClose={handleCloseDeleteCustomerModal}
        >
            <Content>
                <FiTrash2 size="4rem" />
                <span>{customerToDelete.nome}</span>
                <p>Quer mesmo excluir esse cliente? Ele será removido pra sempre.</p>
                <div className="modal-actions">
                    <Button
                        style={{color: 'var(--danger-color)'}}
                        onClick={handleCloseDeleteCustomerModal}
                    >
                        Cancelar
                    </Button>
                    <Button
                        color="danger"
                        onClick={() => handleDeleteCustomer(customerToDelete)}
                    >
                        Excluir cliente
                    </Button>
                </div>
            </Content>
        </Modal>
    )
}