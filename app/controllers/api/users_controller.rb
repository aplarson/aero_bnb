class Api::UsersController < Api::ApiController
  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user != current_user
      render json: "Unauthorized access", status: 403
    elsif @user.update(user_params)
      render :show
    else
      render json: @user.errors, status: 422
    end
  end
end