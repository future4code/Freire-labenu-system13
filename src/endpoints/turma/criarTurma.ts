import { Request, Response } from "express";
import { connection } from "../../connection";

export const criarTurma = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id: string = Date.now().toString();
    const { nome, modulo } = req.body;
    await connection("Turma").insert({ id, nome, modulo });

    res.status(200).send(`Cadastro realizado com sucesso`);
  } catch (error: any) {
    res.status(500).send(`erro`);
  }
};
