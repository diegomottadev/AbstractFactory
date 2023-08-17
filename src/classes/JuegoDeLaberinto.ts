import { FabricaDeLaberintos } from "./FabricaAbstracta/FabricaDeLaberintos";
import { Direccion } from "./Direccion"; // Asegúrate de importar el enum Direccion
import { Laberinto } from "./Laberinto";

export class JuegoDelLaberinto {
    crearLaberinto(fabrica: FabricaDeLaberintos): Laberinto {
        const laberinto = fabrica.hacerLaberinto();
        const h1 = fabrica.hacerHabitacion(1);
        const h2 = fabrica.hacerHabitacion(2);
        const puerta = fabrica.hacerPuerta(h1, h2); // Almacena la puerta en una variable

        laberinto.anadirHabitacion(h1);
        laberinto.anadirHabitacion(h2);

        h1.EstablecerLado(Direccion.Norte,fabrica.hacerPared());
        h1.EstablecerLado(Direccion.Este, puerta);
        h1.EstablecerLado(Direccion.Sur, fabrica.hacerPared());
        h1.EstablecerLado(Direccion.Oeste,fabrica.hacerPared());
        
        h2.EstablecerLado(Direccion.Norte, fabrica.hacerPared());
        h2.EstablecerLado(Direccion.Este,fabrica.hacerPared());
        h2.EstablecerLado(Direccion.Sur, fabrica.hacerPared());
        h2.EstablecerLado(Direccion.Oeste, puerta);

        return laberinto;
    }
}
