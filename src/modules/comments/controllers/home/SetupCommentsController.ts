import { Request, Response } from 'express';
import CommentsService from '../../services/home/SetupCommentsService';
import { instanceToInstance } from 'class-transformer';

export default class SetupCommentsController {
  public async setupComment(request: Request, response: Response): Promise<Response> {
    const { comment_id, comment, email } = request.body;
    const commentsService = new CommentsService();
    const Comment = await commentsService.setup({
      comment_id,
      comment,
      email				
    });
    return response.json(instanceToInstance(Comment));
  }
}