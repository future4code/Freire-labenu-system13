import { Request, Response } from 'express';
import { connection } from '../../connection';

export const buscarEstudante = async (req: Request, res: Response) => {
  let statusCode = 500;
  try {
    const nome: string = req.query.nome as string;
    if (!nome) {
      statusCode = 404;
      throw new Error('Estudante não encontrado');
    }

    const result = await connection('Estudante')
      .select('*')
      .where('nome', 'like', `%${nome}%`);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(statusCode).send(error.sqlMessage || { message: error.message });
  }
};
