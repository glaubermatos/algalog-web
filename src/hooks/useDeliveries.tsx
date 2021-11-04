import { AxiosResponse } from "axios";
import { useState, createContext, ReactNode, useEffect, useContext } from "react";
import { api } from "../services/api";
import { Delivery, DeliveryInput } from "../types";

interface DeliveriesContextData {
    deliveries: Delivery[];
    createDelivery: (delivery: DeliveryInput) => void;
    changeStatus: (deliveryId: number, newStatus: string) => void;
}

interface DeliveriesProviderProps {
    children: ReactNode;
}

const DeliveriesContext = createContext<DeliveriesContextData>(
    {} as DeliveriesContextData
)

export function DeliveriesProvider({children}: DeliveriesProviderProps) {
    const [deliveries, setDeliveries] = useState<Delivery[]>([])

    useEffect(() => {
        api.get<Delivery[]>('/entregas')
            .then(response => setDeliveries(response.data))
    }, [])

    async function createDelivery(deliveryInput: DeliveryInput) {
        const response = await api
            .post<DeliveryInput, AxiosResponse<Delivery>>('/entregas', deliveryInput)

            const delivery = response.data
            setDeliveries(oldState => [...oldState, delivery])
    }
        
    async function changeStatus(deliveryId: number, newStatus: string) {
        let deliveriesUpdate = [...deliveries]        
        let deliveryUpdated = deliveriesUpdate.find(delivery => Number(delivery.id) === Number(deliveryId))
        
        if(deliveryUpdated) {
            switch (newStatus) {
                case 'FINALIZADA':
                    await api.put(`/entregas/${deliveryId}/finalizacao`)
                    deliveryUpdated.status = 'FINALIZADA'
                    
                    break;
    
                case 'CANCELADA':
                    await api.put(`/entregas/${deliveryId}/cancelamento`)
                    deliveryUpdated.status = 'CANCELADA'
    
                    break;
            
                default:
                    break;
            }
        }
        setDeliveries(deliveriesUpdate)
    }

    return(
        <DeliveriesContext.Provider
            value={{
                deliveries,
                createDelivery,
                changeStatus
            }}
        >
            {children}
        </DeliveriesContext.Provider>
    );
}

export function useDeliveries() {
    const context = useContext(DeliveriesContext)

    return context
}