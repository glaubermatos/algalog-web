import { ReactNode } from 'react'
import Modal from 'react-modal'

interface ALModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    children: ReactNode;
}

export function ALModal( { isOpen, onRequestClose, children }: ALModalProps) {

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            { children }
        </Modal>
    )
}