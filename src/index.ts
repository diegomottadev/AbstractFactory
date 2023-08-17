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