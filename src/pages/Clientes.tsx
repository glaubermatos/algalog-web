import { useHistory } from 'react-router-dom'

import { Header } from "../components/Header";
import { Container, Content } from "../styles/pages/clientes";
import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import { FaPlus } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Customer, CustomerResponse } from '../types';

export function Clientes() {
    const history = useHistory()

    const [customers, setCustomers] = useState<Customer[]>([])
    const [customersAmount, setCustomersAmount] = useState(0)

    useEffect(() => {
        api.get<CustomerResponse>('/clientes')
            .then(response => {
                setCustomers(response.data.clientes)
                setCustomersAmount(response.data.clientes.length)
            })
    }, [])

    return(
        <Container>
            <Header 
                iconName="clientes" 
                title="Clientes" 
                helpText={`${customersAmount} ${customersAmount > 1 ? 'clientes cadastrados' : 'cliente cadastrado'}`}
            >
                <button className="button primary-light" onClick={() => history.push('/customers/new')}>
                    <FaPlus size={14} />
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
                                        <FiEdit2 size="1.25rem" color="#5CB768" />
                                    </button>

                                    <button 
                                        type="button"
                                    >
                                        <FiTrash2 size="1.25rem" color="#CF3034" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Content>
        </Container>
    );
}