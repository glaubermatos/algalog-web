import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { ALModal } from "../ALModal";

interface NewOccurrenceProps {
    isOpen: boolean;
    onRequestClose: () => void;
    onLoadOccurrences: () => void;
    entregaId: string;
}

export function NewOccurrenceModal({isOpen, onRequestClose, onLoadOccurrences, entregaId}: NewOccurrenceProps) {

    const [descricao, setDescricao] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        const data = {
            descricao
        }

        api.post(`/entregas/${entregaId}/ocorrencias`, data)
            .then(response => {
                console.log(response.data)
                toast.success('Ocorrência adicionada ao pedido')
                onLoadOccurrences()
                onRequestClose()
            })

    }

    return(
        <ALModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            headerTitle="Adicionar ocorrência"
        >
            <form onSubmit={handleSubmit} style={{marginTop: '3rem'}}>
                <div className="form-group">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea
                        id="descricao"
                        name="descricao"
                        rows={3}
                        onChange={(event) => setDescricao(event.target.value)}
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