import { createConnection } from "typeorm";

export const conectServerToDB = async () => {
    const connection = await createConnection();
    console.log(`App conectado ao DB ${connection.options.database}`);

    process.on('SIGINT', () => {
        connection.close().then(() => console.log('Conexãp copm do DB fechada'));
    });
};