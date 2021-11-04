import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

import { api } from "../../../services/api";

import { Modal } from "../";

import { Button } from "../../../shared/Button";
import { Textarea } from "../../../shared/Textarea";

interface NewOccurrenceProps {
    isOpen: boolean;
    onRequestClose: () => void;
    onLoadOccurrences: () => void;
    entregaId: number;
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
                toast.success('Ocorrência adicionada ao pedido')
                onLoadOccurrences()
                onRequestClose()
            })
            .catch(response => {
                console.log(response.data)
                toast.error('Erro ao tentar salvar a ocorrência')
            })
    }

    return(
        <Modal
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
                        style={{width: '100%'}}
                    >
                        Registrar nova ocorrência
                    </Button>
                </div>
            </form>
        </Modal>
    )
}