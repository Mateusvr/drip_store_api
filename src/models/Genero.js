import mongoose from "mongoose";

const Genero = mongoose.model('Produto', {
    nome:String,
    codigo: Number,
})

export default Genero