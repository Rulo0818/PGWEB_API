import { appDataSource } from "../config/db";
import { alertas } from "../entities/alertas";

const alertasRepository = appDataSource.getRepository(alertas);

export class alertasService {
    async getAllalertas(): Promise<alertas[]> {
        return await alertasRepository.find();
    }

    async getById_alerta(id_alerta: number): Promise<alertas | null> {
        return await alertasRepository.findOneBy({ id_alerta });
    }

    async getByProducto(id_producto: number): Promise<alertas[]> {
        return await alertasRepository.find({
            where: { id_producto }
        });
    }

    async createalerta(data: Partial<alertas>): Promise<alertas> {
        const nueva = alertasRepository.create(data);
        return await alertasRepository.save(nueva);
    }

    async update(id_alerta: number, data: Partial<alertas>): Promise<alertas | null> {
        const existente = await alertasRepository.findOneBy({ id_alerta });
        if (!existente) {
            return null;
        }
        alertasRepository.merge(existente, data);
        return await alertasRepository.save(existente);
    }

    async delete(id_alerta: number): Promise<boolean> {
        const result = await alertasRepository.delete(id_alerta);
        return result.affected !== 0;
    }
}
