import "reflect-metadata";
import * as dotenv from "dotenv";
dotenv.config();
export const appDataSource =new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port:parseInt(process.env.DB_PORT || "3306"),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,    
    logging: false,
    entities: [__dirname + "/../entities/*.ts"],    
    migrations: [__dirname + "/../migrations/*.ts"],
    subscribers: [__dirname + "/../subscribers/*.ts"],
});
appDataSource.initialize()
    .then(()=>{
        console.log ("Data source ahas been initialized");
    })
    .catch((err)=>{
        console.error("Error during data source initialization:", err);
    
    });