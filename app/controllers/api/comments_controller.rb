class Api::CommentsController < Api::ApiController
  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    if @comment.save
      render json: @comment
    else
      render json: @comment.errors, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:commentable_id, :commentable_type, :content)
  end
end