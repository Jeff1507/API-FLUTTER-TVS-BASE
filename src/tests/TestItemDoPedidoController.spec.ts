const request = require('supertest');
import * as server from '../server';
const app = server.server;
import { Request, Response } from 'express';

describe('Teste da rota getItemDoPedidoById', () => {
    it('Deve retornar o item do pedido correto quando o ID é valido', async () => {
        const itemDoPedidoId = 1;
        const response = await request(app).get(`/itensDoPedido/${itemDoPedidoId}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id', itemDoPedidoId);
    });

    it('deve retornar um status 404 quando o ID do item do pedido não existe', async () => {
        const itemDoPedidoId = 9999;

        const response = await request(app).get(`/itensDoPedido/${itemDoPedidoId}`);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('message', 'cliente não encontrado');
    });
})