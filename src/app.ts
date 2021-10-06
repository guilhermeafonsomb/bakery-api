import * as express from 'express';
import * as cors from 'cors';
import * as logger from 'morgan';
import 'express-async-errors';
import './database';
import './containers';
import { router } from './routes';
import { AppError } from './errors/AppError';

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
 * MiddleWare para tratativas de erros
*/
app.use((err: Error, 
    req: express.Request, 
    res: express.Response, 
    next: express.NextFunction) => {
        if(err instanceof AppError) {
            return res.status(err.statusCode).json({
                message: err.message
            });
        };

        return res.status(500).json({
            status: 'error',
            message: `Internal server error - ${err.message}`
        })
    }
);