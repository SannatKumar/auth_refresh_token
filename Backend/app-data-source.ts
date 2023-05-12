import { DataSource } from "typeorm";
import { user } from './src/entity/user.entity'
import { Reset } from "./src/entity/reset.entity";

export const myDataSource = new DataSource({
    
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "Ramysql123456..-",
        database: "authentication_app",
        entities: [
            user, Reset
        ],
        logging: false,
        synchronize: true
    
}) 