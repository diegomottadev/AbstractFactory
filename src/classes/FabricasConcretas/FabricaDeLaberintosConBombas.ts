import { FabricaDeLaberintos } from "../FabricaAbstracta/FabricaDeLaberintos";

import { ParedExplosionada } from "../ProductoConcretos/ParedExplosionada";
import { Habitacion } from "../ProductoAbstractos/Habitacion";
import { HabitacionConBomba } from "../ProductoConcretos/HabitacionConBomba";
import { Laberinto } from "../Laberinto";
import { Pared } from "../ProductoAbstractos/Pared";
import { Puerta } from "../ProductoAbstractos/Puerta";
import { PuertaNormal } from "../ProductoConcretos/PuertaNormal";


export class FabricaDeLaberintosConBombas extends FabricaDeLaberintos {
    
    hacerLaberinto(): Laberinto {
        return new Laberinto();
    }

    hacerPared(): Pared{
        return new ParedExplosionada();
    }

    hacerHabitacion(numero: number): Habitacion {
        return new HabitacionConBomba(numero);
    }

    hacerPuerta(habitacion1: Habitacion, habitacion2: Habitacion): Puerta {
        return new PuertaNormal (habitacion1, habitacion2);
    }


}

