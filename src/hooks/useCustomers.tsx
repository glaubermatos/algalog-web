import { AxiosResponse } from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { Customer, CustomerInput } from "../types";

interface CustomerContextData {
    customers: Customer[];
    customer: Customer;
    createCustomer: (customerInput: CustomerInput) => void;
    updateCustomer: (customer: Customer) => void;
    deleteCustomer: (customerId: number) => Promise<void>;
    showCustomer: (customerId: number) => Promise<Customer>
}

interface CustomerProviderProps {
    children: ReactNode;
}

const CustomersContext = createContext<CustomerContextData>({} as CustomerContextData)

export function CustomersProvider({ children }: CustomerProviderProps) {

    const [customers, setCustomers] = useState<Customer[]>([])
    const [customer, setCustomer] = useState<Customer>({} as Customer)

    useEffect(() => {
        api.get<Customer[]>('/clientes')
            .then(response => setCustomers(response.data))
    }, [])

    async function showCustomer(id: number) {
        const response = await api.get<Customer>(`/clientes/${id}`)
        setCustomer(response.data)

        return response.data
    }

    async function createCustomer(customerInput: CustomerInput) {
        const response = await api
            .post<CustomerInput, AxiosResponse<Customer>>('/clientes', customerInput)

        const newCustomer = response.data
        let customersUpdate = [...customers]

        customersUpdate.push(newCustomer)

        setCustomer(newCustomer)
        setCustomers(customersUpdate)
    }

    async function updateCustomer(customer: Customer) {
        const response = await api.put<Customer>(`/clientes/${customer.id}`, customer)
        const customerUpdated = response.data

        let customersUpdate = [...customers]
        
        const indexCustomerUpdated = customersUpdate.findIndex(customer => customer.id === customerUpdated.id)
        customersUpdate[indexCustomerUpdated] = customerUpdated

        setCustomer(customerUpdated)
        setCustomers(customersUpdate)
    }

    async function deleteCustomer(id: number) {
        await api.delete(`/clientes/${id}`)

        let customersUpdate = [...customers]
        customersUpdate = customersUpdate.filter(customer => customer.id !== id)

        setCustomers(customersUpdate)

        return;
    }

    return(
        <CustomersContext.Provider value={{
            customers,
            customer,
            createCustomer,
            updateCustomer,
            deleteCustomer,
            showCustomer
        }}>
            {children}
        </CustomersContext.Provider>
    )
}

export function useCustomers() {
    const context = useContext(CustomersContext)

    return context
}