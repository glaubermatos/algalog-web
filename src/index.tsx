import React from 'react';
import ReactDOM from 'react-dom';
import { App}  from './App';

import { belongsTo, createServer, hasMany, JSONAPISerializer, Model, Response } from 'miragejs'
// import { ModelDefinition } from 'miragejs/-types';
// import Schema from 'miragejs/orm/schema';

// type Entrega = {
//   id: number,
//     cliente: {
//         id: number,
//         nome: string
//     },
//     destinatario: {
//         nome: string,
//         logradouro: string,
//         numero: string,
//         complemento: string,
//         bairro: string
//     },
//     taxa: number,
//     status: 'FINALIZADO' | 'PENDENTE' | 'CANCELADO',
//     dataPedido: string,
//     dataFinalizacao: string
// }

// const EntregaModel: ModelDefinition<Entrega> = Model.extend({})

// type AppRegistry = Registry<{
//   entrega: typeof EntregaModel;
// },
// {}>

// type AppSchema = Schema<AppRegistry>

createServer({
  models: {
    cliente: Model,
    entrega: Model.extend({
      cliente: belongsTo(),
      ocorrencias: hasMany()
    }),
    ocorrencia: Model.extend({
      entrega: belongsTo()
    })
  },

  serializers: {
    application: JSONAPISerializer,
  },

  seeds(server) {
    server.db.loadData({
      clientes: [
        {
          id: 1,
          nome: 'Glauber de Oliveira Matos',
          email: 'glauber@email.com',
          telefone: '73981787390'
        },
        {
          id: 2,
          nome: 'Mariah Fátima Sueli Novaes',
          email: 'mariahfatimasuelinovaes@mrv.com.br',
          telefone: '15985428107'
        },
        {
          id: 3,
          nome: 'Hugo Elias Guilherme Rezende',
          email: 'hugoeliasguilhermerezende@clickfios.com.br',
          telefone: '61985260763'
        }
      ],
      entregas: [
        // {
        //   id: 1,
        //   cliente: {
        //     id: 1,
        //     nome: 'Glauber de Oliveira Matos'
        //   },
        //   destinatario: {
        //     nome: 'Glauber',
	      //     logradouro: 'Rua Governador Valdir Pires',
	      //     numero: 'S/Nº',
	      //     complemento: 'Casa',
	      //     bairro: 'Centro'
        //   },
        //   taxa: 15,
        //   status: 'CANCELADO',
        //   dataPedido: new Date(),
        //   dataFinalizacao: null
        // },
        // {
        //   id: 2,
        //   cliente: {
        //     id: 1,
        //     nome: 'Glauber de Oliveira Matos'
        //   },
        //   destinatario: {
        //     nome: 'Glauber',
	      //     logradouro: 'Rua Governador Valdir Pires',
	      //     numero: 'S/Nº',
	      //     complemento: 'Casa',
	      //     bairro: 'Centro'
        //   },
        //   taxa: 25,
        //   status: 'PENDENTE',
        //   dataPedido: new Date(),
        //   dataFinalizacao: null
        // },
        // {
        //   id: 3,
        //   cliente: {
        //     id: 1,
        //     nome: 'Glauber de Oliveira Matos'
        //   },
        //   destinatario: {
        //     nome: 'Glauber',
	      //     logradouro: 'Rua Governador Valdir Pires',
	      //     numero: 'S/Nº',
	      //     complemento: 'Casa',
	      //     bairro: 'Centro'
        //   },
        //   taxa: 10,
        //   status: 'FINALIZADO',
        //   dataPedido: new Date(),
        //   dataFinalizacao: new Date()
        // }
      ],
      ocorrencias: []
    })
  },

  routes() {
    this.timing = 1000
    this.namespace = 'api'

    this.get('/entregas', (schema) => {
      return schema.db.entregas
    })

    this.get('/entregas/:id', (schema, request) => {
      let entrega = schema.db.entregas.find(request.params.id)
      const cliente = schema.db.clientes.find(entrega.cliente.id)
      
      entrega.cliente = {
        id: cliente.id,
        nome: cliente.nome
      }

      return entrega
    })

    this.post('/entregas', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      const cliente = schema.db.clientes.find(data.cliente.id)
      
      const newDelivery = {
        cliente: {
          id: cliente.id,
          nome: cliente.nome
        },
        taxa: data.taxa,
        destinatario: data.destinatario, 
        status: 'PENDENTE', 
        dataPedido: new Date(),
        dataFinalizacao: null,
        ocorrencias: []
      }

      return schema.db.entregas.insert(newDelivery)
    })

    this.put('/entregas/:id/finalizacao', (schema, request) => {
      const id = request.params.id
      
      schema.db.entregas
        .update(id, {status: 'FINALIZADO', dataFinalizacao: new Date()})

      return new Response(204)
    })

    this.get('/entregas/:id/ocorrencias', (schema, request) => {
      let entrega = schema.db.entregas.find(request.params.id)
      const ocorrencias = schema.db.ocorrencias.filter(ocorrencia => ocorrencia.entregaId === entrega.id)
    
      console.log(ocorrencias)

      return ocorrencias
    })

    this.post('/entregas/:id/ocorrencias', (schema, request) => {
      let data = JSON.parse(request.requestBody)
      
      const newOcorrencia = {
        descricao: data.descricao,
        dataRegistro: new Date(),
        entregaId: request.params.id
      }

      console.log(newOcorrencia)
      
      return schema.db.ocorrencias.insert(newOcorrencia)
    })

    this.get('/clientes', () => {
      return this.schema.db.clientes
    })

    this.post('/clientes', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.db.clientes.insert(data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
