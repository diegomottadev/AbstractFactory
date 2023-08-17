import { Habitacion } from "./Habitacion";

export abstract class Puerta {
    constructor(public habitacion1: Habitacion, public habitacion2: Habitacion) {}
    abstract imprimir() :void;

}