import { Request, Response } from 'express';
import CommentService from '../../services/home/GetCommentsService';
import { instanceToInstance } from 'class-transformer';

export default class CommentsController {
  public async getCommentId(request: Request, response: Response): Promise<Response> {
    const comment_id  = request.params.comment_id;
    const commentService = new CommentService();
    const comment = await commentService.getCommentId({
      comment_id
    });
    return response.json(instanceToInstance(comment));
  }
}