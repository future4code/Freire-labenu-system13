import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { criarEstudante } from "./endpoints/estudante/criarEstudante";
import { buscarEstudante } from "./endpoints/estudante/buscar.Estudante";
import { mudarTurma } from "./endpoints/estudante/mudarTurma";
import { criarTurma } from "./endpoints/turma/criarTurma";

const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// Endpoints da tabela 'Estudante'
app.post("/studant", criarEstudante);
app.get("/studant", buscarEstudante);
app.put("/studant", mudarTurma);

//Endpoints da tabela 'Turma'
app.post("/turmas", criarTurma);
//app.get("/turmas", buscarTurma);
// app.put('/turmas',mudarModulo)
