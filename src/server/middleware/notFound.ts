import { Request, Response } from 'express';
// @ts-ignore

/**
 * Not found controller.
 * @param {object} req request object.
 * @param {object} res response object.
 */
const notFound = (req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found.' });
};

export = notFound;
