import { Router } from 'express';

// import all the routes classes
import templatesRouter from './templates.routes';

const routes = Router();

// redirect all routes related to a resource to its route class
routes.use('/templates', templatesRouter);

export default routes;
