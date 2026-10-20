import express from 'express'
import cors from 'cors'
import { paises, clubes } from './datos.js'

const app = express()
app.use(cors())

const PORT = 3000

// GET /api/clubes            → los 16 clubes
// GET /api/clubes?pais=Chile → búsqueda anidada: clubes de ese país
app.get('/api/clubes', (req, res) => {
    const nombrePais = req.query.pais

    // Sin ?pais= → todos los clubes
    if (!nombrePais) {
        return res.json(clubes)
    }

    // 1) Resolver la referencia: buscar el país por su nombre (sin importar mayúsculas)
    const pais = paises.find(p => p.nombre.toLowerCase() === nombrePais.toLowerCase())

    // 2) Si el país no existe → 404
    if (!pais) {
        return res.status(404).json({ error: `No existe el país ${nombrePais}` })
    }

    // 3) Filtrar los clubes de ese país (puede ser [] y eso es 200)
    const clubesDelPais = clubes.filter(c => c.paisId === pais.id)
    res.json(clubesDelPais)
})

// GET /api/clubes/:id → un club por su id
app.get('/api/clubes/:id', (req, res) => {
    // req.params.id llega como texto: se convierte a número para comparar con ===
    const id = Number(req.params.id)
    const club = clubes.find(c => c.id === id)

    if (!club) {
        return res.status(404).json({ error: `No existe el club ${req.params.id}` })
    }

    res.json(club)
})

// http://localhost:3000/api/titulos
// GET /api/titulos →  todos los años de todos los clubes, ordenados
app.get('/api/titulos', (req, res) => {
    const todosLosTitulos = clubes
        .flatMap(c => c.titulos.map(anio => ({ anio, club: c.nombre })))
        .sort((a, b) => a.anio - b.anio)

    res.json(todosLosTitulos)
})

// http: //localhost:3000/api/titulos/colo-colo
// GET /api/titulos/:club → los años de títulos de un club, buscado por nombre
app.get('/api/titulos/:club', (req, res) => {
    const nombreClub = req.params.club

    // Buscar UN club por su nombre, sin importar mayúsculas
    const club = clubes.find(c => c.nombre.toLowerCase() === nombreClub.toLowerCase())

    // El club no existe → 404
    if (!club) {
        return res.status(404).json({ error: `No existe el club ${nombreClub}` })
    }

    // El club existe → sus títulos (puede ser [] y eso es 200)
    res.json(club.titulos)
})

app.listen(PORT, () => {
    console.log(`🏆 API escuchando en http://localhost:${PORT}`)
})

// Una decisión explicada por ti, con el código en pantalla: cómo resolviste ?pais= (la búsqueda anidada) y por qué [] y 404 no son lo mismo. No leas el código línea por línea: explica por qué lo hiciste así.