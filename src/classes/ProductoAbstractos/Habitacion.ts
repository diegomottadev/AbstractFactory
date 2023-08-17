import { Direccion } from "../Direccion";
import { Pared } from "./Pared";
import { Puerta } from "./Puerta";



export abstract class Habitacion {
    constructor(public numero: number) {}

    abstract EstablecerLado(direccion: Direccion, elemento: Pared | Puerta | null): void;
    abstract ObtenerLado(direccion: Direccion): Pared | Puerta | null;
    abstract tieneBomba(): boolean;

    abstract obtenerInformacionEspecífica(): Record<string, string>;
}