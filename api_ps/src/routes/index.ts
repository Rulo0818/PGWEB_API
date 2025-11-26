import { Router } from "express";
import userRoutes from "./userroutes";
import notificacionesRoutes from "./notificacionesroutes";
import alertasRoutes from "./alertasroutes";

const router = Router();

router.use("/users", userRoutes);
router.use("/notificaciones", notificacionesRoutes);
router.use("/alertas", alertasRoutes);

// Ruta de prueba
router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "API PGWEB funcionando correctamente",
        version: "1.0.0"
    });
});

export default router;