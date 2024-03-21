const request = require('supertest');
import * as server from '../server';
const app = server.server;
import { Request, Response } from 'express';

describe('Teste da rota getClienteById', () => {
    it('deve retornar o cliente correto quando o ID é valido', async () => {
        const clienteId = 1;
        const response = await request(app).get(`/clientes/${clienteId}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id', clienteId);
    });
})