import { Habitacion } from "../ProductoAbstractos/Habitacion";
import { Pared } from "../ProductoAbstractos/Pared";
import { Puerta } from "../ProductoAbstractos/Puerta";
import { Laberinto } from "../Laberinto";


export abstract class FabricaDeLaberintos {
    abstract hacerLaberinto(): Laberinto;
    abstract hacerPared(): Pared;
    abstract hacerHabitacion(numero: number): Habitacion;
    abstract hacerPuerta(habitacion1: Habitacion, habitacion2: Habitacion): Puerta;
}