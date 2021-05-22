import { Request, Response, NextFunction } from 'express';
// @ts-ignore
import { getPokemon } from '../../services/pokemon';


/**
 * Benefits controller.
 * @param {object} req request object.
 * @param {object} res response object.
 */
export const getPokemonController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const name = req.params && req.params.name;
    const pokemon = await getPokemon(name);

    res.status(200).json(pokemon);
  } catch (err) {
    next(err);
  }
};