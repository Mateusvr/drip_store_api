import Produto from "../models/Produto.js"
class ProdutoController {

    static criar = async (req, res) => {

    }
    static buscarTodos = async (req, res) => {
        const produtos = await Produto.find()
        res.status(200).json(produtos0)
    }
    static  buscarPorId = async (req, res) => {
        const id = req.params.id

        if(id) {
            res.status(422).json('ID não encontrado!')
        }else {
            const produtos = await Produto.findById(id)
            res.status(200).json(produto)
        }

    }
    static atualizar = async (req, res) => {
        
    }
    static excluir = async (req, res) => {
        
    }
}