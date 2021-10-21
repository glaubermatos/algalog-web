import { ReactNode } from 'react'
import { FiX } from 'react-icons/fi'
import Modal from 'react-modal'
import { Header } from '../Header'

interface ALModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    headerTitle: string;
    children: ReactNode;
}

Modal.setAppElement('#root')

export function ALModal( { isOpen, onRequestClose, headerTitle, children }: ALModalProps) {

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Header title={headerTitle}>
                <button className="link-button" onClick={onRequestClose}>
                    <FiX size={19} color="#0C1D0E" />
                    Fechar
                </button>
            </Header>
            { children }
        </Modal>
    )
}