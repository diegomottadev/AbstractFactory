import { Habitacion } from "./ProductoAbstractos/Habitacion";

export class Laberinto {
    public habitaciones: Habitacion[] = [];

    anadirHabitacion(habitacion: Habitacion) {
        this.habitaciones.push(habitacion);
    }

    imprimirLaberinto() {
        console.log("Laberinto:");
        for (const habitacion of this.habitaciones) {
            console.log(`Habitación ${habitacion.numero}:`);
            console.log(`Tiene bomba: ${habitacion.tieneBomba()}`);
        }
    }
}
