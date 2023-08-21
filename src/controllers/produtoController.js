import moment from "moment/moment.js"
import { Produto } from "../models/Produto.js"

export class ProdutoController {

    static criar = async (req, res) => {
        console.log("body", req.body)

        const { nome, genero, preco, desconto, tipo } = req.body
        const produto = { nome, genero, preco, desconto, tipo }

        const produtoDB = await Produto.create(produto);
        res.status(201).json({
            data: produtoDB,
            msg: "Produto inserido com sucesso"
        })
    }
    static buscarTodos = async (req, res) => {
        const produtos = await Produto.find()
        res.status(200).json(produtos)
    }
    static buscarPorId = async (req, res) => {
        const id = req.params.id

        if (id) {
            res.status(422).json('ID não encontrado!')
        } else {
            const produtos = await Produto.findById(id)
            res.status(200).json(produto)
        }

    }
    static atualizar = async (req, res) => {
        const id = req.params.id

        const { nome, genero, preco, desconto, tipo } = req.body
        const produto = { nome, genero, preco, desconto, tipo }

        //Produto.updateOne({_id : id}, produto) -> sem o await, não efetiva a atualização. Assim, sendo necessário utilizar o await.

        // await Produto.updateOne({_id : id}, produto) -> com o await, retorna o objeto que confirma se o que foi enviado foi atualiazdo.
        const updatedProduto = await Produto.updateOne({ _id: id }, produto);
        console.log(`updatedProduto`, updatedProduto._update)

        let dateDeleted 
        res.status(200).json({
            data: updatedProduto._update,
            msg: `O produto ${produto.nome} foi atualizado com sucesso!`
        })
    }
    static excluir = async (req, res) => {
        const id = req.params.id

        const deletedProduto = await Produto.findByIdAndRemove(id)
        console.log('deletedProduto', deletedProduto)

        let dateDeleted = moment(new Date()).format('DD/MM/YYYY hh:mm:ss')

        res.status(200).json({
            data: dateDeleted,
            msg: `O item foi deletado com sucesso`
        })
    }
}