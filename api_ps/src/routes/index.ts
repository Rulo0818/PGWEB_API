import { Router } from "express";
import userRoutes from "./userroutes";

const router = Router();

// Rutas principales
router.use("/users", userRoutes);

// Ruta de prueba
router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "API PGWEB funcionando correctamente",
        version: "1.0.0"
    });
});

export default router;

