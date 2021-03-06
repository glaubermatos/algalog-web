export interface Customer {
    id: number;
    nome: string;
    email: string;
    telefone: string;
}

export interface CustomerInput {
    nome: string;
    email: string;
    telefone: string;
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
    status: 'FINALIZADA' | 'PENDENTE' | 'CANCELADA',
    dataPedido: string,
    dataFinalizacao: string
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

export interface Occurrence {
    id: number;
    descricao: string;
    dataRegistro: string;
}