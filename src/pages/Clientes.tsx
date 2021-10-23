import { useHistory } from 'react-router-dom'
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi'

import { ALModal } from '../components/ALModal';

import { api } from '../services/api';
import { Header } from "../components/Header";
import { Container, Content } from "../styles/pages/clientes";
import { useEffect, useState } from 'react';
import { Customer } from '../types';
import { toast } from 'react-toastify';

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

    function handleOpenDeleteCustomerModal(customer: Customer) {
        setIsDeleteCustomerModalOpen(true)
        setCustomerToDelete(customer)
    }

    function handleCloseDeleteCustomerModal() {
        setIsDeleteCustomerModalOpen(false)
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
            .catch(response => toast.error('Cliente não pode ser excluído'))
    }

    return(
        <Container>
            <Header 
                iconName="clientes" 
                title="Clientes" 
                helpText={`${customersAmount} ${customersAmount > 1 ? 'clientes cadastrados' : 'cliente cadastrado'}`}
            >
                <button className="button primary-light" onClick={() => history.push('/customers/new')}>
                    <FiPlus size={19} />
                    Novo cliente
                </button>
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

                <ALModal
                    headerTitle="Excluir cliente" 
                    isOpen={isDeleteCustomerModalOpen}
                    onRequestClose={handleCloseDeleteCustomerModal}
                >
                    <Content>
                        <div className="modal-delete-cliente">
                            <FiTrash2 size="4rem" />
                            <span>{customerToDelete.nome}</span>
                            <p>Quer mesmo excluir esse cliente? Ele será removido pra sempre.</p>
                            <div className="modal-actions">
                                <button onClick={handleCloseDeleteCustomerModal} className="button default">Cancelar</button>
                                <button onClick={() => handleDeleteCustomer(customerToDelete)} className="button danger">Excluir cliente</button>
                            </div>
                        </div>
                    </Content>
                </ALModal>
            </Content>
        </Container>
    );
}