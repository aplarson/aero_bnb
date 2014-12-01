class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user
  helper_method :logged_in?

  def current_user
    User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def log_in(user)
    session[:session_token] = user.reset_session_token!
  end

  def log_out(user)
    user.reset_session_token!
    session[:session_token] = nil
  end

  def require_signed_in
    redirect_to new_session_url unless logged_in?
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :description, :photo_url)
  end
end
