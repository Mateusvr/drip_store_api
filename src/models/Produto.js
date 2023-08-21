import mongoose, { Types } from "mongoose";

export const Produto = mongoose.model('Produto', {
    tipo: String,
    nome: String,
    genero: {
        type: mongoose.Schema.Types.ObjectId ,
        ref: 'Genero' ,
        required: true
    },
    preco: Types.Decimal128,
    desconto: Types.Decimal128,
})