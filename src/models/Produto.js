import mongoose, { Types } from "mongoose";

const Produto = mongoose.model('Produto', {
    tipo: String,
    nome: String,
    genero: String,
    preco: Types.Decimal128,
    desconto: Types.Decimal128,
})