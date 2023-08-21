import express from "express"
import { ProdutoController } from "../controllers/produtoController.js"

export const routerProduto = express.Router()

routerProduto
    .post("/produto", ProdutoController.criar)
    .get("/produto", ProdutoController.buscarTodos)
    .get("/produto/:id", ProdutoController.buscarPorId)
    .put("/produto/:id", ProdutoController.atualizar)
    .delete("/produto/:id", ProdutoController.excluir)