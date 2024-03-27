const request = require('supertest');
import * as server from '../server';
const app = server.server;
import { Request, Response } from 'express';

describe('Teste da rota getPedidoById', () => {
    it('deve retornar o pedido correto quando o ID é valido', async () => {
        const pedidoId = 1;
        const response = await request(app).get(`/pedidos/${pedidoId}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id', pedidoId);
    });
    it('deve retornar um status 404 quando o ID do pedido não existe', async () => {
        const pedidoId = 9999;

        const response = await request(app).get(`/pedidos/${pedidoId}`);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('message', 'pedido não encontrado');
    });
})