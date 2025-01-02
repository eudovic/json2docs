import express, { json } from 'express';
import api from './routes/api.js';
import setupSwagger from './swagger.js';

const app = express();
const port = 3000;

app.use(json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
// Configura as rotas
app.use('/api', api);
setupSwagger(app);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log('Swagger docs available at http://localhost:3000/api-docs');
});

