import express = require("express");
import { Express, Request, Response } from "express";
import "reflect-metadata";
import { appDataSource } from "./config/db";
import routes from "./routes";

const app: Express = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS - Permitir todas las solicitudes (ajustar según necesidades)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    
    if (req.method === "OPTIONS") {
        res.sendStatus(200);
    } else {
        next();
    }
});

// Rutas de la API
app.use("/api", routes);

// Ruta de prueba
app.get("/", (req: Request, res: Response) => {
    res.json({
        success: true,
        message: "Servidor PGWEB API funcionando",
    
    });
});

// Manejo de errores 404
app.use((req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: "Ruta no encontrada"
    });
});

// Inicializar servidor
const startServer = async () => {
    try {
        // Inicializar conexión a la base de datos
        if (!appDataSource.isInitialized) {
            await appDataSource.initialize();
            console.log("✅ Data source inicializado correctamente");
        }

        // Iniciar servidor
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);

        });
    } catch (error) {
        console.error("Error al iniciar el servidor:", error);
        process.exit(1);
    }
};

startServer();

export default app;

