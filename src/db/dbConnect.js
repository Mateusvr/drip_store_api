import mongoose from "mongoose";
import 'dotenv/config';

const USER = process.env.DB_USER
const PASS = process.env.DB_PASS

console.log(USER, PASS)

export default mongoose.connect(`mongodb+srv://${USER}:${PASS}@cluster0.dpqf3re.mongodb.net/dripstore?retryWrites=true&w=majority`)

.then(() => console.log('BD CONECTADO COM SUCESSO'))

.catch(error => console.log(`ERRO AO CONECTAR AO BANCO: ${error}`))
