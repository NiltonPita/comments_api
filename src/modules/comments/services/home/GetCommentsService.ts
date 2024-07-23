

interface IRequest {
  comment_id: string;
}

class GetCommentsService {
  public async getCommentId({ comment_id }: IRequest) {
    if (comment_id == "1") {
      return ( {"comments": [{"comment_id": 1, "comment": "Primeiro comentario", "email": "teste1@email.com" }, {"comment_id": 1, "comment": "Continuação primeiro comentario", "email": "teste2@email.com" }]})
    }
    if (comment_id == "2") {
      return ( {"comments": [{"comment_id": 2, "comment": "Segundo Comentario", "email": "email1@email.com" }, {"comment_id": 2, "comment": "Continuação segundo comentario", "email": "email2@email.com" }]})
    }
  }
}

export default GetCommentsService;

