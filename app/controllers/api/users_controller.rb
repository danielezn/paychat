class Api::UsersController < Api::BaseController
  def details
    render json: current_user
  end
end