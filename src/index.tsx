import React from 'react';
import ReactDOM from 'react-dom';
import { App}  from './App';

import { createServer, Model, Registry, Request } from 'miragejs'
import { ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';

type Entrega = {
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

const EntregaModel: ModelDefinition<Entrega> = Model.extend({})

type AppRegistry = Registry<{
  entrega: typeof EntregaModel;
},
{}>

type AppSchema = Schema<AppRegistry>

createServer({
  models: {
    cliente: Model,
    entrega: Model
  },

  seeds(server) {
    server.db.loadData({
      clientes: [
        // {
        //   id: 1,
        //   nome: 'Glauber de Oliveira Matos',
        //   email: 'glauber@email.com',
        //   telefone: '73981787390'
        // },
        // {
        //   id: 2,
        //   nome: 'Mariah Fátima Sueli Novaes',
        //   email: 'mariahfatimasuelinovaes@mrv.com.br',
        //   telefone: '15985428107'
        // },
        // {
        //   id: 3,
        //   nome: 'Hugo Elias Guilherme Rezende',
        //   email: 'hugoeliasguilhermerezende@clickfios.com.br',
        //   telefone: '61985260763'
        // }
      ],
      entregas: [
        {
          id: 1,
          cliente: {
            id: 1,
            nome: 'Glauber de Oliveira Matos'
          },
          destinatario: {
            nome: 'Glauber',
	          logradouro: 'Rua Governador Valdir Pires',
	          numero: 'S/Nº',
	          complemento: 'Casa',
	          bairro: 'Centro'
          },
          taxa: 15,
          status: 'CANCELADO',
          dataPedido: new Date(),
          dataFinalizacao: null
        },
        {
          id: 2,
          cliente: {
            id: 1,
            nome: 'Glauber de Oliveira Matos'
          },
          destinatario: {
            nome: 'Glauber',
	          logradouro: 'Rua Governador Valdir Pires',
	          numero: 'S/Nº',
	          complemento: 'Casa',
	          bairro: 'Centro'
          },
          taxa: 25,
          status: 'PENDENTE',
          dataPedido: new Date(),
          dataFinalizacao: null
        },
        {
          id: 3,
          cliente: {
            id: 1,
            nome: 'Glauber de Oliveira Matos'
          },
          destinatario: {
            nome: 'Glauber',
	          logradouro: 'Rua Governador Valdir Pires',
	          numero: 'S/Nº',
	          complemento: 'Casa',
	          bairro: 'Centro'
          },
          taxa: 10,
          status: 'FINALIZADO',
          dataPedido: new Date(),
          dataFinalizacao: new Date()
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/entregas', () => {
      return this.schema.all('entrega')
    })

    this.get('/clientes', () => {
      return this.schema.all('cliente')
      // return [
        // {
        //   id: 1,
        //   nome: 'Glauber de Oliveira Matos',
        //   email: 'glauber@email.com',
        //   telefone: '73981787390'
        // },
        // {
        //   id: 2,
        //   nome: 'Mariah Fátima Sueli Novaes',
        //   email: 'mariahfatimasuelinovaes@mrv.com.br',
        //   telefone: '15985428107'
        // },
        // {
        //   id: 3,
        //   nome: 'Hugo Elias Guilherme Rezende',
        //   email: 'hugoeliasguilhermerezende@clickfios.com.br',
        //   telefone: '61985260763'
        // }
      // ]
    })

    this.post('/clientes', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('cliente', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
