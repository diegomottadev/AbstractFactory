import { Direccion } from "../Direccion";
import { Habitacion } from "../ProductoAbstractos/Habitacion";
import { Pared } from "../ProductoAbstractos/Pared";
import { Puerta } from "../ProductoAbstractos/Puerta";

export class HabitacionNormal extends Habitacion {
    private lados: Map<Direccion, Pared | Puerta | null> = new Map();

    EstablecerLado(direccion: Direccion, elemento: Pared | Puerta | null) {
        this.lados.set(direccion, elemento);
    }

    ObtenerLado(direccion: Direccion): Pared | Puerta | null {
        return this.lados.get(direccion) || null;
    }

    tieneBomba(): boolean {
        return false;
    }

    obtenerInformacionEspecífica(): Record<string, string> {
        const infoLados: Record<string, string> = {};
        this.lados.forEach((elemento, direccion) => {
            const nombreDireccion = Direccion[direccion]; // Obtener el nombre del enum

            if (elemento instanceof Puerta) {
                infoLados[direccion] = `Puerta ${nombreDireccion}`;
            } else if (elemento instanceof Pared) {
                infoLados[direccion] =`Pared ${nombreDireccion}`;
            } else {
                infoLados[direccion] = 'Ninguno';
            }
        });
        return infoLados;
    }
}
