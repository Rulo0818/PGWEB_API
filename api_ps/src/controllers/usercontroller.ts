import { Request, Response } from "express";
import { UserService } from "../services/userservice";
import { User } from "../entities/user";

const userService = new UserService();

export class UserController {
    async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await userService.getallusers();
            res.status(200).json({
                success: true,
                data: users
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error al obtener usuarios",
                error: error instanceof Error ? error.message : "Error desconocido"
            });
        }
    }

    async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                res.status(400).json({
                    success: false,
                    message: "ID inválido"
                });
                return;
            }

            const user = await userService.getuserbyid(id);
            if (!user) {
                res.status(404).json({
                    success: false,
                    message: "Usuario no encontrado"
                });
                return;
            }

            res.status(200).json({
                success: true,
                data: user
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error al obtener usuario",
                error: error instanceof Error ? error.message : "Error desconocido"
            });
        }
    }

    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const { name, lastName, age } = req.body;

            if (!name || !lastName || !age) {
                res.status(400).json({
                    success: false,
                    message: "Faltan campos requeridos: name, lastName, age"
                });
                return;
            }

            const userData: Partial<User> = {
                name,
                lastName,
                age: parseInt(age)
            };

            const newUser = await userService.createuser(userData);
            res.status(201).json({
                success: true,
                message: "Usuario creado exitosamente",
                data: newUser
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error al crear usuario",
                error: error instanceof Error ? error.message : "Error desconocido"
            });
        }
    }

    async updateUser(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                res.status(400).json({
                    success: false,
                    message: "ID inválido"
                });
                return;
            }

            const { name, lastName, age } = req.body;
            const userData: Partial<User> = {};

            if (name) userData.name = name;
            if (lastName) userData.lastName = lastName;
            if (age) userData.age = parseInt(age);

            const updatedUser = await userService.updateuser(id, userData);
            if (!updatedUser) {
                res.status(404).json({
                    success: false,
                    message: "Usuario no encontrado"
                });
                return;
            }

            res.status(200).json({
                success: true,
                message: "Usuario actualizado exitosamente",
                data: updatedUser
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error al actualizar usuario",
                error: error instanceof Error ? error.message : "Error desconocido"
            });
        }
    }

    async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                res.status(400).json({
                    success: false,
                    message: "ID inválido"
                });
                return;
            }

            const deleted = await userService.deleteuser(id);
            if (!deleted) {
                res.status(404).json({
                    success: false,
                    message: "Usuario no encontrado"
                });
                return;
            }

            res.status(200).json({
                success: true,
                message: "Usuario eliminado exitosamente"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error al eliminar usuario",
                error: error instanceof Error ? error.message : "Error desconocido"
            });
        }
    }
}

