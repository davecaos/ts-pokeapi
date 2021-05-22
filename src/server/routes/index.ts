import { Router } from 'express';
import health from './health';
import {getPokemonController} from '../controller/pokemon';

import { notFound } from '../middleware';

const router: Router = Router();


router.get('/pokemon/:name', getPokemonController);
router.use('/health', health);
router.get('*', notFound);

export = router;
