import express from 'express';
import { generateDocument } from '../controllers/documentController.js';
import '../docs/documentGenerate.js'; // Importa o arquivo de documentação

const api = express.Router();

api.post('/document-generate', generateDocument);

export default api;
