
interface IRequest {
  comment_id: number;
  comment: string;
  email: string;
}

class setupCommentsService {
  public async setup({ comment_id, comment, email }: IRequest) {
    return ( {"comments": {"comment_id": comment_id, "comment": comment, "email": email }})
  }    
}

export default setupCommentsService;

