import "reflect-metadata";
import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import { User } from "../entities/user";
dotenv.config();

export const appDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "3306"),
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "db_api_crud",
    synchronize: true,    // 
    logging: false,
    entities: [User],   
    migrations: [__dirname + "/../migrations/*.ts"],
    subscribers: [__dirname + "/../subscribers/*.ts"],
});