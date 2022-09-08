import { Request, Response } from 'express';
import { connection } from '../../connection';

export const mudarTurma = async (req: Request, res: Response) => {
  let statusCode = 500;
  try {
    const user_id: string = req.body.user_id as string;
    const turma_id: string = req.body.turma_id as string;
    await connection('Estudante')
      .update('turma_id', `${turma_id}`)
      .where('id', 'like', `${user_id}`);
    res.status(201).send(`Atualização de turma efetuada com sucesso!`);
  } catch (error: any) {
    res.status(statusCode).send(error.sqlMessage || { message: error.message });
  }
};
