import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
    
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "Ramysql123456..-",
        database: "authentication_app",
        entities: [
            "src/entity/*.ts"
        ],
        logging: false,
        synchronize: true
    
}) 