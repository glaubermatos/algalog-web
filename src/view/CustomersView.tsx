import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi'
import { toast } from 'react-toastify';

import { api } from '../services/api';

import { Button } from '../shared/Button';
import { Header } from "../components/Header";

import { Customer } from '../types';

import { Container, Content } from "../styles/pages/clientes";
import { DeleteCustomerModal } from '../components/Modal/DeleteCustomerModal';

export function Clientes() {
    const history = useHistory()

    const [customers, setCustomers] = useState<Customer[]>([])
    const [customersAmount, setCustomersAmount] = useState(0)
    const [customerToDelete, setCustomerToDelete] = useState<Customer>({} as Customer)

    const [isDeleteCustomerModalOpen, setIsDeleteCustomerModalOpen] = useState(false)

    useEffect(() => {
        api.get<Customer[]>('/clientes')
            .then(response => {
                const clientes = response.data
                setCustomers(clientes)
                setCustomersAmount(clientes.length)
            })
    }, [])

    function handleOpenDeleteCustomerModal(customerToDelete: Customer) {
        setIsDeleteCustomerModalOpen(true)
        setCustomerToDelete(customerToDelete)
    }

    function handleCloseDeleteCustomerModal() {
        setIsDeleteCustomerModalOpen(false)
        setCustomerToDelete({} as Customer)
    }

    function handleDeleteCustomer(customerUpdated: Customer) {
        api.delete(`/clientes/${customerUpdated.id}`)
            .then(response => {
                let customersUpdated = customers;
                customersUpdated = customersUpdated.filter(customer => customer.id !== customerUpdated.id)
                
                setCustomers(customersUpdated)
                setCustomersAmount(customersUpdated.length)
                setCustomerToDelete({} as Customer)

                toast.success('Cliente excluído')

                handleCloseDeleteCustomerModal()
            })
            .catch(response => toast.error('Existe entregas para esse cliente. Não pode ser excluído'))
    }

    function handleLinkToCreateNewCustomer() {
        history.push('customers/new')
    }

    function handleLinkToEditCustomer(customerId: number) {
        history.push(`/customers/${customerId}`)
    }

    return(
        <Container>
            <Header 
                iconName="clientes" 
                title="Clientes" 
                helpText={`${customersAmount} ${customersAmount > 1 ? 'clientes cadastrados' : 'cliente cadastrado'}`}
            >
                <Button
                    color="primary"
                    type="button"
                    onClick={handleLinkToCreateNewCustomer}
                >
                    <FiPlus size={19} />
                    Novo cliente
                </Button>
            </Header>
            <Content>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map(customer => (
                            <tr key={ customer.id} >
                                <td>{ customer.nome }</td>
                                <td>{ customer.email }</td>
                                <td>{ customer.telefone }</td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={() => handleLinkToEditCustomer(customer.id)}
                                    >
                                        <FiEdit2 className="edit" size={19} />
                                    </button>

                                    <button 
                                        type="button"
                                        onClick={() => handleOpenDeleteCustomerModal(customer)}
                                    >
                                        <FiTrash2 className="trash" size={19} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <DeleteCustomerModal
                    isDeleteCustomerModalOpen={isDeleteCustomerModalOpen}
                    onRequestClose={handleCloseDeleteCustomerModal}
                    onDeleteCustomer={() => handleDeleteCustomer(customerToDelete)}
                    customerToDelete={customerToDelete}
                />

            </Content>
        </Container>
    );
}