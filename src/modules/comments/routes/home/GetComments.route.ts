import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import GetCommentController from '../../controllers/home/GetCommentsController';

const commentRouter = Router();
const commentController = new GetCommentController();

commentRouter.get(
  '/:comment_id',
  celebrate({
    [Segments.PARAMS]: {
      comment_id: Joi.string(),
    }, 
  }),
  commentController.getCommentId,
);

export default commentRouter;
