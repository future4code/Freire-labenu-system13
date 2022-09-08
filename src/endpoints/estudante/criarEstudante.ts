import { Request, Response } from 'express';
import { connection } from '../../connection';
import { conversaoData } from '../../conversaoData';

export const criarEstudante = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode = 500;
  try {
    const id: string = Date.now().toString();
    const { nome, email, turma_id } = req.body;
    let data_nasc = req.body.data_nasc;
    if (!nome || !email || !data_nasc || !turma_id) {
      statusCode = 422;
      throw new Error(`Favor inserir todos os dados`);
    }

    data_nasc = conversaoData(data_nasc);

    await connection('Estudante').insert({
      id,
      nome,
      email,
      data_nasc,
      turma_id,
    });
    res.status(201).send(`Usuário criado com sucesso!`);
  } catch (error: any) {
    res.status(statusCode).send(error.sqlMessage || { message: error.message });
  }
};
