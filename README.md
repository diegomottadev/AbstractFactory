# Abstract Factory Pattern

Abstract Factory is a design pattern that provides an interface for creating families of related or dependent objects, without specifying their concrete classes.

## Why use Abstract Factory?

Imagine you are designing a virtual reality platform that offers immersive experiences to users. This platform is compatible with various display systems, such as holographic displays and conventional virtual reality goggles. Each display system has its unique set of interactive elements, such as floating panels, gesture controls, and focus points.

This is where the Abstract Factory pattern comes into play. Instead of writing specific code for each display system, you can use the Abstract Factory pattern to create a common interface that allows the creation of interactive elements independently of the underlying system. This means that the platform can easily adapt to new display systems without having to completely rewrite the interaction code.

For example, if you decide to add support for a new augmented reality system that uses hand gestures to interact with virtual objects, you would simply implement a new abstract factory that creates the necessary interactive elements for that system. Without needing to alter the main platform code, you achieve seamless expansion through the Abstract Factory pattern.

In summary, the Abstract Factory pattern allows you to create a flexible and adaptable ecosystem, where different "families" of interactive elements can coexist harmoniously and evolve with the changing demands of display technology.

## Use the Abstract Factory pattern when:

1) A system needs to be independent of how its products are created, composed, and represented.
2) A system needs to be configured with a family of products from several options.
3) a family of related product objects is designed to be used together, and it's necessary to enforce this restriction.
4) you want to provide a library of product class interfaces and only want to reveal their interfaces, not their implementations.

## Participants
1) Abstract Factory: declares an interface for operations that create abstract product objects, such as floating panels, gesture controls, and focus points, regardless of the specific display system

2) Concrete Factory: implements the operations to create concrete product objects.  (holographic displays, virtual reality goggles, etc.).

3) Abstract Product: declares an interface for a type of product object, like floating panels or gesture controls.

4) Concrete Product: defines a product object to be created by the respective factory,implements the Abstract Product interface. Actual implementations of the interactive elements, tailored for each display system.

5) Client: only uses interfaces declared by the Abstract Factory and Abstract Product classes.  Utilizes the Abstract Factory and Abstract Product interfaces to create and interact with the appropriate interactive elements based on the chosen display system, ensuring a consistent user experience across different systems.

## Collaborations

- Normally, only one instance of a Concrete Factory class is created at runtime. This concrete factory creates product objects with a specific implementation. To create different product objects, clients should use a different concrete factory.
- The Abstract Factory delegates the creation of product objects to its Concrete Factory subclass.

## Implementation:

The abstract class FabricaDeLaberintos serves as a blueprint for creating maze components. It provides a set of methods that subclasses can implement to create different elements of a maze. Let's break down how this abstract class would be used based on the provided code:

FabricaDeLaberintos.ts:

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

The function "crearLaberinto" constructs a small maze consisting of 2 rooms with a door between them. "CrearLaberinto" hardcodes the class names in the code, making it difficult to create mazes with other components. "CrearLaberinto" addresses this limitation by taking a "FabricaDeLaberinto" as a parameter:

JuegoDelLaberinto.ts

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

We can create FabricaDeLaberintosConBombas, a factory for mazes with bombs, as a subclass of FabricaDeLaberintos. This subclass will redefine different member functions and return subclasses of Habitacion, Pared, Puerta, etc. A FabricaDeLaberintosConBombas ensures that the doors are of the subclass ParedExplosionada and that the rooms are of the subclass HabitacionConBomba.

FabricaDeLaberintosConBombas.ts:

    import { FabricaDeLaberintos } from "../FabricaAbstracta/FabricaDeLaberintos";
    
    import { ParedExplosionada } from "../ProductoConcretos/ParedExplosionada";
    import { Habitacion } from "../ProductoAbstractos/Habitacion";
    import { HabitacionConBomba } from "../ProductoConcretos/HabitacionConBomba";
    import { Laberinto } from "../Laberinto";
    import { Pared } from "../ProductoAbstractos/Pared";
    import { Puerta } from "../ProductoAbstractos/Puerta";
    import { PuertaNormal } from "../ProductoConcretos/PuertaNormal";
    import { ParedNormal } from "../ProductoConcretos/ParedNormal";
    
    
    export class FabricaDeLaberintosConBombas extends FabricaDeLaberintos {
        
        hacerLaberinto(): Laberinto {
            return new Laberinto();
        }

        ParedExplosionada(): Pared{
            return new ParedExplosionada();
        }
    
        hacerHabitacion(numero: number): Habitacion {
            return new HabitacionConBomba(numero);
        }
    
        hacerPuerta(habitacion1: Habitacion, habitacion2: Habitacion): Puerta {
            return new PuertaNormal (habitacion1, habitacion2);
        }
    }
Let's suppose we want to do the same for enchanted mazes:

We can create FabricaDeLaberintosEncantado, a factory for enchanted mazes, as a subclass of FabricaDeLaberintos. This subclass will redefine different member functions and return subclasses of Habitacion, Pared, Puerta, etc. An EnchantedMazeFactory ensures that the doors are of the subclass PuertaEncantada and that the rooms are of the subclass HabitacionEncantada:

    import { FabricaDeLaberintos } from "../FabricaAbstracta/FabricaDeLaberintos";
    import { ParedExplosionada } from "../ProductoConcretos/ParedExplosionada";
    import { Habitacion } from "../ProductoAbstractos/Habitacion";
    import { HabitacionConBomba } from "../ProductoConcretos/HabitacionConBomba";
    import { Laberinto } from "../Laberinto";
    import { Pared } from "../ProductoAbstractos/Pared";
    import { Puerta } from "../ProductoAbstractos/Puerta";
    import { PuertaNormal } from "../ProductoConcretos/PuertaNormal";
    import { ParedNormal } from "../ProductoConcretos/ParedNormal";
    import { PuertaHechiza } from "../ProductoConcretos/PuertaHechiza";
    import { HabitacionHechizada } from "../ProductoConcretos/HabitacionHechizada";
    
    export class FabricaDeLaberintosEncantados extends FabricaDeLaberintos {
        
        hacerLaberinto(): Laberinto {
            return new Laberinto();
        }
    
        hacerPared(): Pared {
            return new ParedNormal();
        }
    
        hacerHabitacion(numero: number): Habitacion {
            return new HabitacionHechizada(numero);
        }
    
        hacerPuerta(habitacion1: Habitacion, habitacion2: Habitacion): Puerta {
            return new PuertaHechiza(habitacion1, habitacion2);
        }
    }


To construct a maze that can contain bombs, we simply call "CrearLaberinto" with a "FabricaDeLaberintosConBombas".

index.js:

    import express from 'express';
    import { FabricaDeLaberintosConBombas } from './classes/FabricasConcretas/FabricaDeLaberintosConBombas';
    import { JuegoDelLaberinto } from './classes/JuegoDeLaberinto';
    const app = express();
    const port = process.env.PORT || 3000;
    
    app.get('/', (_req, res) => {
        const fabrica = new FabricaDeLaberintosConBombas();
        const juego = new JuegoDelLaberinto();
        
        const laberinto = juego.crearLaberinto(fabrica);
        // Construir un nuevo arreglo de habitaciones con la información de los lados
        const habitacionesConLados = laberinto.habitaciones.map(habitacion => ({
            numero: habitacion.numero,
            lados: habitacion.obtenerInformacionEspecífica()
        }));
        res.json({
            message: 'Laberinto creado con fábrica de laberintos con bombas.',
            laberinto: {
                habitaciones: habitacionesConLados
            }
        });
    });
    
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });

Note that FabricaDeLaberintos is nothing more than a collection of factory methods. This is the most common way to implement the Abstract Factory pattern.

As FabricaDeLaberintos is an abstract class consisting solely of factory methods, it's easy to create a new MazeFactory by creating a subclass that extends the abstract class and redefines the operations that need to be changed.
