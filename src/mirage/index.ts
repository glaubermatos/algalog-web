import { belongsTo, createServer, hasMany, Model, Response } from 'miragejs'
import { Customer } from '../types';

export function makeServer({ environment = 'test'}) {
    return createServer({
        environment,

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

        routes() {
            this.timing = 750
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
        
            this.put('/entregas/:id/cancelamento', (schema, request) => {
              const id = request.params.id
              
              schema.db.entregas
                .update(id, {status: 'CANCELADO', dataFinalizacao: null})
        
              return new Response(204)
            })
        
            this.get('/entregas/:id/ocorrencias', (schema, request) => {
              let entrega = schema.db.entregas.find(request.params.id)
              const ocorrencias = schema.db.ocorrencias.filter(ocorrencia => ocorrencia.entregaId === entrega.id)
        
              return ocorrencias
            })
        
            this.post('/entregas/:id/ocorrencias', (schema, request) => {
              let data = JSON.parse(request.requestBody)
              
              const newOcorrencia = {
                descricao: data.descricao,
                dataRegistro: new Date(),
                entregaId: request.params.id
              }
        
              return schema.db.ocorrencias.insert(newOcorrencia)
            })
        
            this.get('/clientes', (schema, request) => {
              const customers: Customer[] = schema.db.clientes
        
              if (!request.queryParams.nome) {
                return customers
              }
              
              const searchByNome = request.queryParams.nome
              return customers.filter(customer => customer.nome.toLowerCase().includes(searchByNome.toLowerCase()))
            })
        
            this.get('/clientes/:id', (schema, request) => {
              const id = request.params.id
              return schema.db.clientes.find(id)
            })
        
            this.post('/clientes', (schema, request) => {
              const data = JSON.parse(request.requestBody)
        
              return schema.db.clientes.insert(data)
            })
        
            this.put('/clientes/:id', (schema, request) => {
              const id = request.params.id
              const data = JSON.parse(request.requestBody)
              
              return schema.db.clientes
                .update(id, {id, ...data})
            })
        
            this.delete('/clientes/:id', (schema, request) => {
              const id = request.params.id
              const deliveries = schema.db.entregas
              const deliveriesFiltered = deliveries.filter(delivery => delivery.cliente.id === id)
        
              if(deliveriesFiltered.length > 0) {
                return new Response(400, { some: 'header' }, { errors: [`O cliente não pode ser excluído`] })
              }
        
              schema.db.clientes.remove(id)
        
              return new Response(204)
            })
        },

        seeds(server) {
            server.db.loadData({
              clientes: [
                {
                  id: 1,
                  nome: 'Glauber de Oliveira Matos',
                  email: 'glaub.oliveira@hotmail.com',
                  telefone: '73981787390'
                },
                {
                  id: 2,
                  nome: 'Mariah Fátima Sueli Novaes',
                  email: 'mariahfatimasuelinovaes@mrv.com.br',
                  telefone: '1585428107'
                },
                {
                  id: 3,
                  nome: 'Hugo Elias Guilherme Rezende',
                  email: 'hugoeliasguilhermerezende@clickfios.com.br',
                  telefone: '61985260763'
                }
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
                  status: 'PENDENTE',
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
                  status: 'FINALIZADO',
                  dataPedido: new Date(),
                  dataFinalizacao: new Date()
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
                  status: 'CANCELADO',
                  dataPedido: new Date(),
                  dataFinalizacao: null
                }
              ],
              ocorrencias: []
            })
        }
    })
}