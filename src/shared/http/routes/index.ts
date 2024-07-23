import { Router } from "express";
import setupCommentsRouter from "../../../modules/comments/routes/home/SetupComments.route";
import getSubcategoryRouter from '../../../modules/comments/routes/home/GetComments.route';

const routes = Router();

routes.use('/home/create', setupCommentsRouter);
routes.use('/home/list', getSubcategoryRouter);

export default routes;