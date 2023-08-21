import moment from "moment/moment.js"
import { Genero } from "../models/Genero.js"

export class GeneroController {
    static criar = async (req, res) => {
        console.log("body", req.body)

        const { nome, codigo } = req.body
        const genero = { nome, codigo }

        const generoDB = await Genero.create(genero);
        res.status(201).json({
            data: generoDB,
            msg: "Genero criado com sucesso"
        })
    }

    static buscarTodos = async (req, res) => {
        const generos = await Generos.find()
        res.status(200).json(generos)
    }

    static buscarPorId = async (req, res) => {
        const id = req.params.id

        if (id) {
            res.status(422).json('ID não encontrado!')
        } else {
            const generos = await Genero.findById(id)
            res.status(200).json(genero)
        }

    }
}