import { Request, Response } from "express";
import { connection } from "../../connection";

export const buscarTurma = async (req: Request, res: Response) => {
  let statusCode = 500;
  try {
    const nome: string = req.query.nome as string;
    if (!nome) {
      statusCode = 404;
      throw new Error("Turma não cadastrada");
    }
    const result = await connection("Turma")
      .select("*")
      .where("nome", "like", `%${nome}%`);
    res.status(200).send(result);
  } catch (error: any) {
    res
      .status(statusCode)
      .setDefaultEncoding(error.sqlMessage || { message: error.message });
  }
};
