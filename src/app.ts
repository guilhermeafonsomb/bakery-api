import * as express from 'express';
import * as cors from 'cors';
import * as logger from 'morgan';

import './database';
import './containers';
import { router } from './routes';

/*
* Cria a aplicação 
*/
export const app = express();

/*
 * Libera o acesso aos serviços 
*/
app.use(cors());

/*
 * Permite receber e enviar JSON 
*/
app.use(express.json());

/*
 * Importação das rotas
*/
app.use(router);

/*
 * Configura os logs 
*/
app.use(logger('dev'));

/*
 * Conecta no DataBase 
*/