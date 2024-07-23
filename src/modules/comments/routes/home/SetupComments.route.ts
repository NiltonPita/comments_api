import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import CommentsController from '../../controllers/home/SetupCommentsController';

const commentsRouter = Router();
const commentsController = new CommentsController();

commentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
	    comment_id: Joi.number(),		
      comment: Joi.string(),
      email: Joi.string(),
    },
  }),
  commentsController.setupComment,
);

export default commentsRouter;