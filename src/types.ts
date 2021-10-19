export interface Customer {
    id: number;
    nome: string;
    email: string;
    telefone: string;
}

export interface CustomerResponse {
    clientes: Customer[]
}

export interface Delivery {
    id: number,
    cliente: {
        id: number,
        nome: string
    },
    destinatario: {
        nome: string,
        logradouro: string,
        numero: string,
        complemento: string,
        bairro: string
    },
    taxa: number,
    status: 'FINALIZADO' | 'PENDENTE' | 'CANCELADO',
    dataPedido: string,
    dataFinalizacao: string
}

export interface DeliveryResponse {
    entregas: Delivery[]
}

export interface DeliveryInput {
    cliente: {
        id: number
    },
    destinatario: {
        nome: string,
        logradouro: string,
        numero: string,
        complemento: string,
        bairro: string
    },
    taxa: number
}