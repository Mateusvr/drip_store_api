import express from "express"

export const routerGenero = express.Router();

routerGenero
.post("/genero", GeneroController.criar)
.get("/genero", GeneroController.buscarTodos)
.get("/genero/:id", GeneroController.buscarPorId)