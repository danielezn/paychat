class Api::TalksController < Api::BaseController
  skip_before_action :require_login!, only: [:create]

  def index
  end

  def create
    begin
      binding.pry
      session = $opentok.create_session
      token = session.generate_token
      render json: {session: session, token: token}, status: :ok
    rescue => e
      render json: {error: e.to_s}, status: 500
    end
  end
end