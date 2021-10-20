import { FiX } from "react-icons/fi";
import { ALModal } from "../ALModal";
import { Header } from "../Header";

interface NewOccurrenceProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewOccurrenceModal({isOpen, onRequestClose}: NewOccurrenceProps) {
    return(
        <ALModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <Header title="Adicionar ocorrência">
                <button className="link-button" onClick={onRequestClose}>
                    <FiX size={19} color="#0C1D0E" />
                    Fechar
                </button>
            </Header>
            <form style={{marginTop: '3rem'}}>
                <div className="form-group">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea
                        id="descricao"
                        name="descricao"
                        rows={3}
                        placeholder="Descreva o problema enfrentado com esta entrega"
                    />
                </div>
                <div className="form-actions">
                    <button type="submit" className="button primary-light">
                        Registrar nova ocorrência
                    </button>
                </div>
            </form>
        </ALModal>
    )
}