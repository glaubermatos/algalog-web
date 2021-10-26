import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Button } from "../../shared/Button";
import { Textarea } from "../../shared/Textarea";
import { ALModal } from "../ALModal";

interface NewOccurrenceProps {
    isOpen: boolean;
    onRequestClose: () => void;
    onLoadOccurrences: () => void;
    entregaId: string;
}

export function NewOccurrenceModal({isOpen, onRequestClose, onLoadOccurrences, entregaId}: NewOccurrenceProps) {

    const [descricao, setDescricao] = useState('')

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        const data = {
            descricao
        }

        const response = await api.post(`/entregas/${entregaId}/ocorrencias`, data)

        if(response.status === 201) {
            toast.success('Ocorrência adicionada ao pedido')
            onLoadOccurrences()
            onRequestClose()
        }
    }

    return(
        <ALModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            headerTitle="Adicionar ocorrência"
        >
            <form onSubmit={handleSubmit} style={{marginTop: '3rem'}}>
                <Textarea
                    label="Descrição"
                    name="descricao"
                    rows={3}
                    onChange={(event) => setDescricao(event.target.value)}
                    placeholder="Descreva o problema enfrentado com esta entrega"
                />
                <div className="form-actions">
                    <Button
                        color="primary"
                        type="submit"
                    >
                        Registrar nova ocorrência
                    </Button>
                </div>
            </form>
        </ALModal>
    )
}