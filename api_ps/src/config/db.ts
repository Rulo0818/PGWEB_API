import "reflect-metadata";
import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import { User } from "../entities/user";
import { Notificacion } from "../entities/notificaciones";
import { alertas } from "../entities/alertas";
dotenv.config();

export const appDataSource = new DataSource({
    
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "3306"),
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "notificaciones_alertas",
    synchronize: true,
    logging: false,
    entities: [User, Notificacion, alertas],
    migrations: [__dirname + "/../migrations/*.ts"],
    subscribers: [__dirname + "/../subscribers/*.ts"],
});