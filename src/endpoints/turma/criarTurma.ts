import { Request, Response } from "express";
import { connection } from "../../connection";

export const criarTurma = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode = 500;
  try {
    const id: string = Date.now().toString();
    const { nome, modulo } = req.body;
    await connection("Turma").insert({ id, nome, modulo });
    if (!nome || !modulo) {
      res.statusCode = 404;
      throw `Dados insuficientes`;
    } else res.status(201).send(`Cadastro realizado com sucesso`);
  } catch (error: any) {
    res.status(statusCode).send(error.sqlMessage || { message: error.message });
  }
};
