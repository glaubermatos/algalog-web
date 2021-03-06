import { ChangeEvent, useState } from "react"
import { FiChevronRight } from 'react-icons/fi'

import { api } from "../../../services/api"

import { Modal } from "../"
import { Customer } from "../../../types"

import { Input } from "../../../shared/Input"
import { formatPhone } from "../../../utils/format"

interface SearchCustomerModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    onCustomerSelected: (id: number, name: string) => void;
}

export function SearchCustomerModal({isOpen, onRequestClose, onCustomerSelected }: SearchCustomerModalProps) {

    const [customersFiltered, setCustomersFiltered] = useState<Customer[]>([])

    function handleCustomerSelect(customer: Customer) {
        onCustomerSelected(customer.id, customer.nome)
        handleCloseModal()
    }
    
    function handleCloseModal() {
        setCustomersFiltered([])
        
        onRequestClose()
    }

    function handleSearchCustomer(event: ChangeEvent<HTMLInputElement>) {
        const searchBy = event.target.value

        if(searchBy.length > 2) {
            api.get<Customer[]>(`/clientes?nome=${searchBy}`)
                .then(response => {
                    const customers = response.data
                    const customersFormatted = customers.map(customer => ({...customer, telefone: formatPhone(customer.telefone)}))
                    setCustomersFiltered(customersFormatted)
                })
        }
    }

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            headerTitle="Pesquisar cliente"
        >
            <form style={{marginTop: '3rem'}} autoComplete="off">
                <Input
                    label="Cliente"
                    name="nome"
                    placeholder="Pesquisar cliente por nome"
                    onChange={handleSearchCustomer}
                />
            </form>
            <div className="client-list">
                {customersFiltered.map(customer => (
                    <div 
                        key={customer.id} 
                        className="client-list__item" 
                        onClick={() => handleCustomerSelect(customer)}
                    >
                        <div className="client-list__item-info">
                            <strong>{customer.nome}</strong>
                            <span>{customer.telefone}</span>
                        </div>
                        <FiChevronRight size={24} />
                    </div>
                ))}
            </div>
        </Modal>
    )
}