import { ReactNode } from 'react'
import ReactModal from 'react-modal'
import { FiX } from 'react-icons/fi'

import { Header } from '../Header'

interface ALModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    headerTitle: string;
    children: ReactNode;
}

ReactModal.setAppElement('#root')

export function Modal( { isOpen, onRequestClose, headerTitle, children }: ALModalProps) {

    return(
        <ReactModal
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
        </ReactModal>
    )
}