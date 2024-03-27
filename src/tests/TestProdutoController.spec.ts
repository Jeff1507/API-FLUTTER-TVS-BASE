const request = require('supertest');
import * as server from '../server';
const app = server.server;
import { Request, Response } from 'express';

describe('Teste da rota getProdutoById', () => {
    it('deve retornar o produto correto quando o ID é valido', async () => {
        const produtoId = 1;
        const response = await request(app).get(`/produtos/${produtoId}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id', produtoId);
    });
    it('deve retornar um status 404 quando o ID do produto não existe', async () => {
        const produtoId = 9999;

        const response = await request(app).get(`/produtos/${produtoId}`);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('message', 'produto não encontrado');
    });
})