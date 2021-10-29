import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi'

import { useCustomers } from '../hooks/useCustomers';

import { formatPhone } from '../utils/format';

import { Customer } from '../types';

import { Button } from '../shared/Button';
import { Header } from "../components/Header";
import { DeleteCustomerModal } from '../components/Modal/DeleteCustomerModal';

import { Container, Content } from "../styles/view/customers";

export function Clientes() {
    const { customers, deleteCustomer } = useCustomers()

    const customersFormated = customers.map(customer => ({
        ...customer,
        telefone: formatPhone(customer.telefone)
    }))

    const history = useHistory()

    const customersAmount = customers.length
    const [customerToDelete, setCustomerToDelete] = useState<Customer>({} as Customer)

    const [isDeleteCustomerModalOpen, setIsDeleteCustomerModalOpen] = useState(false)

    function handleOpenDeleteCustomerModal(customerToDelete: Customer) {
        setIsDeleteCustomerModalOpen(true)
        setCustomerToDelete(customerToDelete)
    }

    function handleCloseDeleteCustomerModal() {
        setIsDeleteCustomerModalOpen(false)
        setCustomerToDelete({} as Customer)
    }

    function handleDeleteCustomer(customer: Customer) {
        deleteCustomer(customer.id)
            .then(response => {
                toast.success('Cliente excluído')
                handleCloseDeleteCustomerModal()
            })
            .catch(response => {
                console.log(response)
                toast.error('Existe entregas para esse cliente. Não pode ser excluído')
            })
    }

    function goToCreateNewCustomer() {
        history.push('customers/new')
    }

    function goToEditCustomer(customerId: number) {
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
                    onClick={goToCreateNewCustomer}
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
                        {customersFormated.map(customer => (
                            <tr key={ customer.id} >
                                <td>{ customer.nome }</td>
                                <td>{ customer.email }</td>
                                <td>{ customer.telefone }</td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={() => goToEditCustomer(customer.id)}
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