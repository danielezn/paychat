class Api::UsersController < Api::BaseController
  skip_before_action :require_login!, only: [:create]

  def create
    user = User.new(user_params)
    respond_to do |format|
      if user.save
        format.json { render json: user, status: :created }
      else
        format.json { render json: user.errors, status: :unprocessable_entity }
      end
    end
  end

  def details
    render json: current_user
  end

  private
  def user_params
    params[:password_confirmation] = params[:password]
    params.permit(:email, :password, :password_confirmation)
  end
end