/**
 * This is a Route template class
 * All the operations related to the 'templates' resource must be redirected to this class
 */

import { Router } from 'express';

import TemplatesRepository from '../repositories/TemplatesRepository';
import ActionTemplateService from '../services/ActionTemplateService';

const templatesRouter = Router();

const templatesRepository = new TemplatesRepository();

templatesRouter.get('/', (request, response) => {

});

templatesRouter.post('/', (request, response) => {

});

export default templatesRouter;